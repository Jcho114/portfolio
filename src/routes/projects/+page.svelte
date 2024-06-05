<script type="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { portfolio } from "$lib/projects";
</script>

<h1>Projects</h1>
<ProjectCard project={portfolio} />