import { render, screen } from '@testing-library/react';
import { Fieldset } from 'components/common/Fieldset';

describe('Fieldset', () => {
  test('renders label', () => {
    const label = 'Test Label';
    render(<Fieldset label={label} />);
    const legend = screen.getByText(label);
    expect(legend).toBeInTheDocument();
  });

  test('renders children', () => {
    const childText = 'Test Child';
    render(
      <Fieldset label="Test Label">
        <div>{childText}</div>
      </Fieldset>
    );
    const child = screen.getByText(childText);
    expect(child).toBeInTheDocument();
  });
});
