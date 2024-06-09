import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import NavBar from './NavBar.svelte';

describe('NavBar', () => {
	beforeEach(() => {
		render(NavBar);
	});

	test('should render all links', () => {
		const home = screen.getByRole('link', { name: /^home$/i });
		expect(home).toBeInTheDocument();
		const projects = screen.getByRole('link', { name: /^projects$/i });
		expect(projects).toBeInTheDocument();
		const resume = screen.getByRole('link', { name: /^resume$/i });
		expect(resume).toBeInTheDocument();
	});

	test('should route to the correct links', () => {
		const home = screen.getByRole('link', { name: /^home$/i });
		expect(home.getAttribute('href')).toBe('/');
		const projects = screen.getByRole('link', { name: /^projects$/i });
		expect(projects.getAttribute('href')).toBe('/#projects');
		const resume = screen.getByRole('link', { name: /^resume$/i });
		expect(resume.getAttribute('href')).toContain('https://drive.google.com/file/');
	});
});
