import { render, fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'components/layout/Sidebar';
import { Themes } from 'components/layout/Themes';

describe('Sidebar', () => {
  test('renders logo and navigation links', () => {
    render(
      <Themes>
        <Sidebar />
      </Themes>
    );

    const logo = screen.getByAltText(/logo/i);
    const contactsLink = screen.getByText(/Contacts/i);
    const createLink = screen.getByText(/Create/i);
    const favoriteLink = screen.getByText(/Favorite/i);
    expect(logo).toBeInTheDocument();
    expect(contactsLink).toBeInTheDocument();
    expect(createLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });

  test('toggles mobile menu when button is clicked', () => {
    render(
      <Themes>
        <Sidebar />
      </Themes>
    );

    const button = screen.getByLabelText(/toggle menu/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const mobileMenu = screen.getAllByText('Contacts');
    expect(mobileMenu[1]).toBeInTheDocument();
    fireEvent.click(button);
    expect(mobileMenu[1]).not.toBeInTheDocument();
  });
});
