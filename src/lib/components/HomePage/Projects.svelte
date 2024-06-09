<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import projects from '$lib/projects';
	import AnimatedElement from '$lib/components/animations/AnimatedElement.svelte';
</script>

<div
	id="projects"
	class="flex flex-col justify-center items-center min-h-screen gap-10 py-[5.2rem]"
>
	<h1 class="text-5xl font-semibold mb-4">Projects</h1>
	<div class="flex flex-col gap-y-16 w-3/4 max-md:w-10/12">
		{#each projects as project (project.name)}
			<AnimatedElement>
				<ProjectCard {project} />
			</AnimatedElement>
		{/each}
	</div>
</div>
