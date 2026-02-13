import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';

function renderWithProviders(initialRoute = '/') {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('App', () => {
  it('renders the home page with brand name', async () => {
    renderWithProviders('/');
    const brandLinks = await screen.findAllByText(/Aurelius Partners/i);
    expect(brandLinks.length).toBeGreaterThan(0);
  });

  it('renders the hero headline', async () => {
    renderWithProviders('/');
    const headline = await screen.findByText(/growth system/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders the primary CTA button', async () => {
    renderWithProviders('/');
    const ctas = await screen.findAllByText(/Book a Free Growth Diagnostic/i);
    expect(ctas.length).toBeGreaterThan(0);
  });

  it('renders the navbar with all navigation links', async () => {
    renderWithProviders('/');
    const nav = await screen.findByRole('navigation', { name: /main navigation/i });
    expect(within(nav).getByText('Services')).toBeInTheDocument();
    expect(within(nav).getByText('Case Studies')).toBeInTheDocument();
    expect(within(nav).getByText('Insights')).toBeInTheDocument();
    expect(within(nav).getByText('About')).toBeInTheDocument();
    expect(within(nav).getByText('Contact')).toBeInTheDocument();
  });

  it('renders the skip-to-content link', async () => {
    renderWithProviders('/');
    const skipLink = await screen.findByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders the theme toggle button', async () => {
    renderWithProviders('/');
    const themeButton = await screen.findByRole('button', { name: /switch to/i });
    expect(themeButton).toBeInTheDocument();
  });
});
