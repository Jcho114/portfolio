import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import ProjectCard from './ProjectCard.svelte';
import Tag from '../types/Tag';

const project = {
  name: 'Portfolio',
  description: 'Personal Website that showcases my past projects and experiences.',
  thumbnail: 'https://cagents.com/wp-content/uploads/2020/12/dreamstime_xxl_177798453.jpg',
  role: 'Web Developer',
  tags: [Tag.TypeScript, Tag.Svelte, Tag.Vitest],
  start: 'June 2024',
  end: 'June 2024',
  path: 'portfolio'
}

describe('ProjectCard', () => {
  beforeEach(() => {
    render(ProjectCard, { props: { project }});
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