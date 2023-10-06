import { render, screen } from '@testing-library/react';
import { Main } from 'components/layout/Main';

describe('Main', () => {
  test('renders children', () => {
    render(<Main>Test Children</Main>);
    const children = screen.getByText('Test Children');
    expect(children).toBeInTheDocument();
  });
});
