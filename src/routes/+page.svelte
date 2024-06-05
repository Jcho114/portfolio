<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { portfolio } from '$lib/projects';
</script>

<h1>Home</h1>
<div class="mb-[100vh]"/>
<div id="projects">
    <h1>Projects</h1>
    <ProjectCard project={portfolio} />
</div>
