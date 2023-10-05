import { Button } from 'components/core/Button';
import { Text } from 'components/core/Text';
import { ITEMS_PER_PAGE } from 'config/constant';
import tw, { styled } from 'twin.macro';

type PaginationProps = {
  className?: string;
  currentPage: number;
  totalItems: number;
  isLoading?: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
};

const PaginationStyled = styled('nav')((props) => [
  tw`flex items-center justify-between gap-2`,
  props.className
]);

export const Pagination = (props: PaginationProps) => {
  const { currentPage, totalItems, onPrevPage, onNextPage, className, isLoading } = props;

  if (isLoading)
    return (
      <PaginationStyled className={className}>
        <p>Loading ...</p>
      </PaginationStyled>
    );

  return (
    <PaginationStyled className={className}>
      <Button variant="secondary" onClick={onPrevPage} disabled={currentPage === 1}>
        Prev
      </Button>

      <Text tag="span">{`Page ${currentPage}`}</Text>

      <Button variant="secondary" onClick={onNextPage} disabled={totalItems < ITEMS_PER_PAGE}>
        Next
      </Button>
    </PaginationStyled>
  );
};
