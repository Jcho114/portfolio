<script>
	import ProjectMeta from '$lib/components/ProjectPage/ProjectMeta.svelte';
	import { projectMapping } from '$lib/projects';

	export let path;
</script>

<main
	class="w-inherit min-h-full-with-navbar flex flex-col justify-center items-center py-20 px-[20%] pt-[5%] gap-4"
>
	<ProjectMeta project={projectMapping[path]} />
	<div class="prose prose-xl">
		<slot />
	</div>
</main>
