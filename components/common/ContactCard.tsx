'use client';

import { Button } from 'components/core/Button';
import { Text } from 'components/core/Text';
import { useCallback, useMemo, useState } from 'react';
import { Delete, Star } from 'react-feather';
import { collection } from 'services/Collection';

type Props = {
  id: number;
  name: string;
};

export const ContactCard = (props: Props) => {
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const isCurrentlySaved = useMemo(
    () => collection.getAll().find((f) => f === props.id),
    [props.id, isRefresh]
  );

  const addToCollecition = useCallback(() => {
    collection.add(props.id);
    setIsRefresh(true);
    setTimeout(() => setIsRefresh(false), 500);
  }, [props.id]);

  return (
    <div className="flex items-center p-2 border gap-2 rounded-sm justify-between">
      <Text className="capitalize">{props.name}</Text>

      <div className="flex items-center gap-1">
        {!isRefresh && (
          <Button variant="secondary" onClick={addToCollecition}>
            <Star
              size={16}
              fill={isCurrentlySaved ? 'red' : 'none'}
              stroke={isCurrentlySaved ? 'red' : 'black'}
            />
          </Button>
        )}

        <Button variant="danger">
          <Delete size={16} />
        </Button>
      </div>
    </div>
  );
};
