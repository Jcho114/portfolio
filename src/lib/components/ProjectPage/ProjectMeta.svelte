<script lang="ts">
	import type { Project } from '$lib/types/Project';
	import Tags from '../Tags.svelte';

	export let project: Project;
</script>

<h1 class="text-6xl font-bold mb-4">{project.name}</h1>
<img class="w-full aspect-video object-cover" src={project.thumbnail} alt={project.name} />
<div class="flex gap-[5%] max-md:flex-col w-full">
	<div class="flex flex-col w-[47.5%] max-md:w-full gap-3">
		<div>
			<h3 class="text-xl font-bold">Timeline</h3>
			<h3 class="text-lg">{project.start} - {project.end}</h3>
		</div>
		<div>
			<h3 class="text-xl font-bold">Tools</h3>
			<Tags tags={project.tags} />
		</div>
		{#if project.links.length > 0}
			<div>
				<h3 class="text-xl font-bold">{project.links.length === 1 ? 'Link' : 'Links'}</h3>
			</div>
		{/if}
	</div>
	<div class="flex flex-col w-[47.5%] max-md:w-full">
		<h3 class="text-xl font-bold">Description</h3>
		<h2 class="text-lg">{project.description}</h2>
	</div>
</div>
