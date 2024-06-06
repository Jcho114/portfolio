<script lang="ts">
	import type Project from '$lib/types/Project';

	export let project: Project;
</script>

<div class="flex flex-col w-1/2 gap-2">
	<div>
		<p class="text-3xl font-medium">{project.name}</p>
		<p class="text-md">{project.role}</p>
	</div>
	<p class="text-xl">{project.description}</p>
	<div class="flex gap-4 my-2">
		{#each project.tags as tag (tag)}
			<p class="text-md border border-black rounded-full px-3 py-1">{tag}</p>
		{/each}
	</div>
	<button
		class="text-md border border-black rounded-full w-fit px-3 py-1 hover:bg-gray-100 duration-200 ease-in"
	>
		<a href={`/projects/${project.name.toLowerCase()}`}>Learn More</a>
	</button>
</div>
