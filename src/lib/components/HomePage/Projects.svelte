<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import projects from '$lib/projects';
</script>

<div
	id="projects"
	class="flex flex-col justify-center items-center min-h-screen gap-10 py-[5.2rem]"
>
	<h1 class="text-5xl font-semibold mb-4">Projects</h1>
	<div class="flex flex-col justify-center gap-y-16">
		{#each projects as project (project.name)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
