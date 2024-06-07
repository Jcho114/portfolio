<script lang="ts">
	import type { Project } from '$lib/types/Project';
	import { tagColorMapping } from '$lib/types/Tag';

	export let project: Project;
</script>

<div class="flex flex-row gap-10 justify-center items-center">
	<img class="w-1/4 aspect-[16/10] object-cover" src={project.thumbnail} alt={project.name} />
	<div class="flex flex-col gap-2">
		<div>
			<p class="text-3xl font-medium">{project.name}</p>
			<p class="text-sm">{project.role}</p>
		</div>
		<p class="text-md text-gray-300">{project.description}</p>
		<div class="flex gap-3 my-2">
			{#each project.tags as tag (tag)}
				<p
					class="text-sm border rounded-full px-3 py-1"
					style={`background-color: ${tagColorMapping[tag]}40; border-color: ${tagColorMapping[tag]}; color: ${tagColorMapping[tag]}`}
				>
					{tag}
				</p>
			{/each}
		</div>
		<button class="text-sm border border-white rounded-full w-fit px-3 py-1 duration-200 ease-in">
			<a href={`/projects/${project.name.toLowerCase()}`}>Learn More</a>
		</button>
	</div>
</div>
