import { render, screen } from '@testing-library/react';
import { Text } from 'components/core/Text';

describe('Text', () => {
  test('renders children', () => {
    const text = 'Hello, world!';
    render(<Text>{text}</Text>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('renders with default props', () => {
    render(<Text>Hello, world!</Text>);
    const element = screen.getByText('Hello, world!');

    expect(element.tagName).toBe('P');
    expect(element).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px'
    });
  });

  test('renders with custom tag', () => {
    render(<Text tag="h1">Hello, world!</Text>);
    const element = screen.getByText('Hello, world!');

    expect(element.tagName).toBe('H1');
  });

  test('renders with custom variant', () => {
    render(<Text variant="headline-1">Hello, world!</Text>);
    const element = screen.getByText('Hello, world!');

    expect(element).toHaveStyle({
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      fontWeight: '800',
      letterSpacing: '-0.5px'
    });
  });

  test('renders with custom className', () => {
    const className = 'custom-class';
    render(<Text className={className}>Hello, world!</Text>);
    const element = screen.getByText('Hello, world!');

    expect(element).toHaveClass(className);
  });
});
