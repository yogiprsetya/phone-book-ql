'use client';

import { useDeleteContactMutation } from 'api/Delete/DeleteContactPhone';
import { Button } from 'components/core/Button';
import { Modal } from 'components/core/Modal';
import { Text } from 'components/core/Text';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { Delete, Edit, Star } from 'react-feather';
import { collection } from 'services/Collection';

type Props = {
  id: number;
  name: string;
  number?: string;
  onActionSuccess: () => void;
};

export const ContactCard = (props: Props) => {
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const { mutation } = useDeleteContactMutation();
  const router = useRouter();

  const isCurrentlySaved = useMemo(() => collection.getAll().find((f) => f === props.id), [props.id]);

  const handleToCollection = useCallback(() => {
    if (isCurrentlySaved) {
      collection.remove(props.id);
    } else {
      collection.add(props.id);
    }

    setTimeout(() => props.onActionSuccess(), 1000);
  }, [isCurrentlySaved, props]);

  const handleDeleteContact = async () => {
    const { success } = await mutation(props.id);

    if (success) {
      setShowPopupDelete(false);
      props.onActionSuccess();
    }
  };

  return (
    <div className="flex items-center p-2 border gap-2 rounded-sm justify-between" data-testid="contact-card">
      <div>
        <Text className="capitalize">{props.name}</Text>
        <Text>{props.number}</Text>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="secondary"
          onClick={handleToCollection}
          title={isCurrentlySaved ? `Remove ${props.name} from favorite` : `Add ${props.name} to favorite`}
        >
          <Star
            size={16}
            fill={isCurrentlySaved ? 'red' : 'none'}
            stroke={isCurrentlySaved ? 'red' : 'black'}
          />
        </Button>

        <Button
          variant="secondary"
          title={`Edit ${props.name}`}
          onClick={() => router.push(`/contact/edit?id=${props.id}`)}
        >
          <Edit size={16} />
        </Button>

        <Button
          variant="danger"
          title={`Delete ${props.name} from phone book`}
          onClick={() => setShowPopupDelete(true)}
        >
          <Delete size={16} />
        </Button>
      </div>

      <Modal title="Delete?" onClose={() => setShowPopupDelete(false)} show={showPopupDelete}>
        <Text className="mb-6">
          Are you sure delete <b>{props.name}</b> ?
        </Text>

        <div className="flex gap-2 justify-end">
          <Button variant="secondary" onClick={() => setShowPopupDelete(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleDeleteContact}>
            Yes
          </Button>
        </div>
      </Modal>
    </div>
  );
};
