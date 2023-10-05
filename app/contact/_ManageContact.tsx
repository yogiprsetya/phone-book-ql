'use client';

import { ContactType, useAddContactWithPhones } from 'api/Create/AddContactWithPhones';
import { Fieldset } from 'components/common/Fieldset';
import { Button } from 'components/core/Button';
import { Input } from 'components/core/Input';
import { Text } from 'components/core/Text';
import { Main } from 'components/layout/Main';
import { Delete } from 'react-feather';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

type Props = {
  title: string;
};

export const ManageContact = (props: Props) => {
  const { mutation } = useAddContactWithPhones();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<ContactType>({
    defaultValues: {
      phones: [{ number: '' }]
    }
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'phones' });

  const onSubmit: SubmitHandler<ContactType> = async (data) => {
    const { success } = await mutation(data);

    if (success) {
      alert('Contact created successfully');
      reset();
    }
  };

  console.log(errors);
  return (
    <Main>
      <Text tag="h1" variant="headline-1" className="mb-8">
        {props.title}
      </Text>

      <div className="mb-4 flex flex-col">
        {errors.first_name && <Text tag="span">{errors.first_name.message}</Text>}
        {errors.last_name && <Text tag="span">{errors.last_name.message}</Text>}
        {errors.phones && <Text tag="span">Make sure all phones field is not empty and only number</Text>}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="md:w-6/12 w-full flex flex-col gap-2">
        <Input
          placeholder="Firstname"
          {...register('first_name', {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: 'Please avoid special Character'
            }
          })}
        />

        <Input placeholder="Lastname" {...register('last_name', { required: true })} />

        <Fieldset label="Phones">
          <div className="flex flex-col gap-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-1">
                <Input
                  placeholder="Phone number"
                  {...register(`phones.${index}.number`, {
                    required: true,
                    pattern: {
                      value: /^[0-9]*$/,
                      message: ''
                    }
                  })}
                />

                <Button type="button" variant="danger" onClick={() => remove(index)}>
                  <Delete size={20} />
                </Button>
              </div>
            ))}
          </div>

          <Button className="mt-6" type="button" variant="secondary" onClick={() => append({ number: '' })}>
            Add numbers
          </Button>
        </Fieldset>

        <Button variant="primary" className="ml-auto mt-10">
          Save Contact
        </Button>
      </form>
    </Main>
  );
};
