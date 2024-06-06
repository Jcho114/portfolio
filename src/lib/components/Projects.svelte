<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import projects from '$lib/projects';
</script>

<div id="projects" class="flex flex-col justify-center items-center min-h-screen gap-4">
	<h1 class="text-5xl font-semibold mb-4">Projects</h1>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>