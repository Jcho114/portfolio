import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import Footer from './Footer.svelte';

describe('Footer', () => {
  beforeEach(() => {
    render(Footer);
  });

  test('should render all icons', () => {
    const github = screen.getByTestId('github');
    expect(github).toBeInTheDocument();
    const linkedin = screen.getByTestId('linkedin');
    expect(linkedin).toBeInTheDocument();
    const email = screen.getByTestId('email');
    expect(email).toBeInTheDocument();
  });
});