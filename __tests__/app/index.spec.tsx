/**
 * @jest-environment jsdom
 */

import { render, waitFor, screen } from '@testing-library/react';
import Home from 'app/page';
import { GET_CONTACT_LIST } from 'api/List/GetContactList';
import { CONTACT_LIST_RESPONSE } from '__mocks__/responses';
import { MockedApolloProvider } from '__mocks__/mock-provider';

const mocks = [
  {
    request: {
      query: GET_CONTACT_LIST,
      variables: {
        limit: 10,
        offset: 0,
        where: { first_name: { _like: '%%' }, id: {} }
      }
    },
    result: {
      data: CONTACT_LIST_RESPONSE
    }
  }
];

describe('Home', () => {
  test('renders contacts page (home)', async () => {
    render(
      <MockedApolloProvider mocks={mocks}>
        <Home />
      </MockedApolloProvider>
    );

    await waitFor(() => {
      const heading = screen.getByText(/Contact List/i);
      expect(heading).toBeInTheDocument();
    });
  });

  test('renders right data', async () => {
    render(
      <MockedApolloProvider mocks={mocks}>
        <Home />
      </MockedApolloProvider>
    );

    await waitFor(() => {
      const contacts = screen.getAllByTestId('contact-card');
      expect(contacts.length).toBe(CONTACT_LIST_RESPONSE.contact.length);
    });
  });

  test('searches for contacts when search input is used', async () => {
    render(
      <MockedApolloProvider mocks={mocks}>
        <Home />
      </MockedApolloProvider>
    );

    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText(/Search contact/i) as HTMLInputElement;
      expect(searchInput).toBeInTheDocument();
      searchInput.value = 'John';
      searchInput.dispatchEvent(new Event('input'));
    });
  });
});
