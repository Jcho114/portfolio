<script lang="ts">
	import type Project from '$lib/types/Project';

	export let project: Project;
</script>

<div class="flex flex-col gap-1">
	<p>{project.name}</p>
	<p>{project.description}</p>
	<p>{project.role}</p>
	<div class="flex gap-4">
		{#each project.tags as tag}
			<p>{tag}</p>
		{/each}
	</div>
	<a href={`/projects/${project.name.toLowerCase()}`}>Learn More</a>
</div>
