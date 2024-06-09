import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import ProjectMeta from './ProjectMeta.svelte';
import { project } from '$lib/mocks/mockProjects';

describe('Footer', () => {
	beforeEach(() => {
		render(ProjectMeta, { props: { project } });
	});

	test('should render title', () => {
		expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument();
	});

	test('should render the image', () => {
		const image = screen.getByRole('img', { name: project.name });
		expect(image).toBeInTheDocument();
		expect(image.getAttribute('src')).toBe(project.thumbnail);
	});

	test('should render the metadata', () => {
		const timelineLabel = screen.getByText(/^timeline$/i);
		expect(timelineLabel).toBeInTheDocument();
		const timeline = screen.getByText(project.start + ' - ' + project.end);
		expect(timeline).toBeInTheDocument();
		const toolsLabel = screen.getByText(/^tools$/i);
		expect(toolsLabel).toBeInTheDocument();
		for (const tag of project.tags) {
			const tagLabel = screen.getByText(tag);
			expect(tagLabel).toBeInTheDocument();
		}
		const descriptionLabel = screen.getByText(/^tools$/i);
		expect(descriptionLabel).toBeInTheDocument();
		const description = screen.getByText(project.description);
		expect(description).toBeInTheDocument();
	});
});
