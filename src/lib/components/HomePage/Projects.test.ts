import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import Projects from './Projects.svelte';

describe('Projects', () => {
	beforeEach(() => {
		render(Projects);
	});

	test('shows project header', () => {
		const header = screen.getByRole('heading', { name: /^projects$/i });
		expect(header).toBeInTheDocument();
	});
});
