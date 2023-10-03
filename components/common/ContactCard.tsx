'use client';

import { Button } from 'components/core/Button';
import { Text } from 'components/core/Text';
import { useCallback, useMemo } from 'react';
import { Delete, Star } from 'react-feather';
import { collection } from 'services/Collection';

type Props = {
  id: number;
  name: string;
  onActionSuccess: () => void;
};

export const ContactCard = (props: Props) => {
  const isCurrentlySaved = useMemo(() => collection.getAll().find((f) => f === props.id), [props.id]);

  const handleToCollection = useCallback(() => {
    if (isCurrentlySaved) {
      collection.remove(props.id);
    } else {
      collection.add(props.id);
    }

    setTimeout(() => props.onActionSuccess(), 1000);
  }, [isCurrentlySaved, props]);

  return (
    <div className="flex items-center p-2 border gap-2 rounded-sm justify-between">
      <Text className="capitalize">{props.name}</Text>

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

        <Button variant="danger" title={`Delete ${props.name} from phone book`}>
          <Delete size={16} />
        </Button>
      </div>
    </div>
  );
};
