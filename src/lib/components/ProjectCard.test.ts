import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import ProjectCard from './ProjectCard.svelte';
import { project } from '$lib/mocks/mockProjects';

describe('ProjectCard', () => {
	beforeEach(() => {
		render(ProjectCard, { props: { project } });
	});

	test('should contain metadata', () => {
		const name = screen.getByText(project.name);
		expect(name).toBeInTheDocument();
		const role = screen.getByText(project.role);
		expect(role).toBeInTheDocument();
		const time = screen.getByText(`${project.start} - ${project.end}`);
		expect(time).toBeInTheDocument();
		const description = screen.getByText(project.description);
		expect(description).toBeInTheDocument();
	});

	test('should contain tags', () => {
		for (const tag of project.tags) {
			expect(screen.getByText(tag)).toBeInTheDocument();
		}
	});

	test('should contain the learn more button/link', () => {
		const button = screen.getByRole('link', { name: /^learn more$/i });
		expect(button).toBeInTheDocument();
		expect(button.getAttribute('href')).toBe(`/projects/${project.path}`);
	});
});
