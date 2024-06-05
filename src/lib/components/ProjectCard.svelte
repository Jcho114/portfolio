<script lang="ts">
	import type Project from "$lib/types/Project";

    export let project: Project;
</script>

<h4>{project.name}</h4>
<h4>{project.description}</h4>
<h4>{project.role}</h4>
<div>
    {#each project.tags as tag}
        <h4>{tag}</h4>
    {/each}
</div>