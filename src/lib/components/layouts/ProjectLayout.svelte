<script>
	import ProjectMeta from './ProjectMeta.svelte';
	import { projectMapping } from '$lib/projects';

	export let path;
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<main
	class="w-inherit min-h-full-with-navbar flex flex-col justify-center items-center py-20 px-[27%] pt-[5%] gap-20 max-md:px-[20%] max-md:pt-[10%] max-sm:px-[15%]"
>
	<ProjectMeta project={projectMapping[path]} />
	<div
		class="prose max-w-none w-full prose-lg prose-headings:my-2 prose-headings:text-white prose-p:text-white"
	>
		<slot />
	</div>
</main>
