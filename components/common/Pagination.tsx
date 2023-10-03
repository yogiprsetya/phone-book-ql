import { Button } from 'components/core/Button';
import { Text } from 'components/core/Text';
import tw, { styled } from 'twin.macro';

type PaginationProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  isLoading?: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
};

const PaginationStyled = styled('nav')((props) => [
  tw`flex items-center justify-between gap-2`,
  props.className
]);

export const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPrevPage, onNextPage, className, isLoading } = props;

  if (isLoading)
    return (
      <PaginationStyled className={className}>
        <p>Loading ...</p>
      </PaginationStyled>
    );

  return (
    <PaginationStyled className={className}>
      <Button variant="secondary" onClick={onPrevPage} disabled={currentPage < 1}>
        Prev
      </Button>

      <Text tag="span">{`Page ${currentPage + 1} of ${totalPages + 1}`}</Text>

      <Button variant="secondary" onClick={onNextPage} disabled={currentPage >= totalPages}>
        Next
      </Button>
    </PaginationStyled>
  );
};
