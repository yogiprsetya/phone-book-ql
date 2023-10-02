import { Button } from 'components/core/Button';
import { Text } from 'components/core/Text';
import { Delete } from 'react-feather';

type Props = {
  id: number;
  name: string;
};

export const ContactCard = (props: Props) => {
  return (
    <div className="flex items-center p-2 border gap-2 rounded-sm justify-between">
      <Text className="capitalize">{props.name}</Text>

      <div className="flex items-center">
        <Button variant="danger">
          <Delete />
        </Button>
      </div>
    </div>
  );
};
