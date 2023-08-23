import { render, screen, waitFor } from '@testing-library/react';
import App from 'App';

test('SHOULD default to login page', async () => {
  render(<App />);

  await waitFor(() => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/login/i);
  });
});
