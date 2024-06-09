import { render, screen } from '@testing-library/svelte';
import { describe, test, expect, beforeEach } from 'vitest';
import Tags from './Tags.svelte';
import Tag from '../types/Tag';

const tags = [Tag.TypeScript, Tag.Svelte, Tag.Vitest];

describe('Tags', () => {
	beforeEach(() => {
		render(Tags, { props: { tags } });
	});

	test('should render all tags', () => {
		for (const tag of tags) {
			const taglabel = screen.getByText(tag);
			expect(taglabel).toBeInTheDocument();
		}
	});
});
