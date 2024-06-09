import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import Home from './Home.svelte';

describe('Home', () => {
  beforeEach(() => {
    render(Home);
  });

  test('shows name and description', () => {
    expect(screen.getByText(/^joseph cho$/i)).toBeInTheDocument();
    expect(screen.getByText(/^full stack developer$/i)).toBeInTheDocument();
    expect(screen.getByText(/^computer science and statistics at university of maryland$/i)).toBeInTheDocument();
  });

  test('shows scroll button', () => {
    const scroll = screen.getByRole('link', { name: /^scroll ↓$/i });
    expect(scroll).toBeInTheDocument();
    expect(scroll.getAttribute('href')).toBe('/#projects');
  });

  test('shows card', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});