import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { Routes } from 'router/routes';
import LoginPage from 'pages/access/login';

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const router = createMemoryRouter(Routes, {
    initialEntries: ['/login']
  });
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
      {/* {children} */}
    </QueryClientProvider>
  );
};

describe('LoginPage', () => {
  // Check form fields
  it('SHOULD render all of the fields', () => {
    const { getByRole, getByTestId } = render(<LoginPage />, { wrapper });

    const loginButton = getByRole('button', {
      name: /login/i
    });

    expect(getByTestId('input[username]')).toBeInTheDocument();
    expect(getByTestId('input[password]')).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  // Test form validation
  it('SHOULD handle validation correctly', async () => {
    const { getByRole, getByTestId, getByText } = render(<LoginPage />, { wrapper });

    const usernameField = getByTestId('input[username]');
    const loginButton = getByRole('button', {
      name: /login/i
    });

    // submitting form with empty values
    await act(async () => fireEvent.click(loginButton));
    expect(getByText('Please enter your username and password')).not.toBeNull();

    // submitting form with missing value
    await act(async () => {
      fireEvent.change(usernameField, { target: { value: 'wrongUsername' } });
    });

    await act(async () => fireEvent.click(loginButton));
    expect(getByTestId('form[alert-message]')).not.toBeNull();
  });

  // Test form submit with error return
  it('SHOULD handle error on form submit', async () => {
    jest.spyOn(console, 'error').mockImplementation();

    const { getByRole, getByTestId } = render(<LoginPage />, { wrapper });

    const usernameField = getByTestId('input[username]');
    const passwordField = getByTestId('input[password]');
    const loginButton = getByRole('button', {
      name: /login/i
    });

    // submitting form with incorrect username or password
    await act(async () => {
      fireEvent.change(usernameField, { target: { value: 'wrongUsername' } });
      fireEvent.change(passwordField, { target: { value: 'wrongPassword' } });
    });
    await act(async () => fireEvent.click(loginButton));
    await waitFor(() => {
      expect(getByTestId('form[alert-message]')).toBeInTheDocument();
    });
  });

  // Test form submit with success return
  it('SHOULD handle success on form submit', async () => {
    jest.spyOn(console, 'error').mockImplementation();

    const { getByRole, getByTestId } = render(<LoginPage />, { wrapper });

    const usernameField = getByTestId('input[username]');
    const passwordField = getByTestId('input[password]');
    const loginButton = getByRole('button', {
      name: /login/i
    });

    // submitting form with incorrect username or password
    await act(async () => {
      fireEvent.change(usernameField, { target: { value: process.env.REACT_APP_TEST_USERNAME } });
      fireEvent.change(passwordField, { target: { value: process.env.REACT_APP_TEST_PASSWORD } });
    });
    await act(async () => fireEvent.click(loginButton));
    await waitFor(() => {
      const heading = getByRole('heading', { level: 4 });
      expect(heading).toHaveTextContent(process.env.REACT_APP_TITLE ?? '');
    });
  });
});
