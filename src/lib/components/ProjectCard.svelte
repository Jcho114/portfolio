<script lang="ts">
	import type { Project } from '$lib/types/Project';
	import Tags from './Tags.svelte';
	import CardContainer from './external/ThreeDCardEffect/CardContainer.svelte';
	import CardBody from './external/ThreeDCardEffect/CardBody.svelte';
	import CardItem from './external/ThreeDCardEffect/CardItem.svelte';
	import AnimatedElement from './animations/AnimatedElement.svelte';

	export let project: Project;
	let isMouseEntered = false;
</script>

<AnimatedElement>
	<div class="flex flex-row gap-10 justify-center items-center max-md:flex-col max-md:p-14">
		<CardContainer bind:isMouseEntered>
			<CardBody className="w-fit">
				<CardItem>
					<a href={`/projects/${project.path}`}>
						<img
							class="object-cover max-md:w-full w-[30vw] aspect-[16/10]"
							src={project.thumbnail}
							alt={project.name}
						/>
					</a>
				</CardItem>
			</CardBody>
		</CardContainer>
		<div class="flex flex-col gap-2 w-1/3 max-md:w-full">
			<div>
				<p class="text-3xl font-medium">{project.name}</p>
				<p class="text-sm">{project.role}</p>
				<p class="text-sm">{project.start} - {project.end}</p>
			</div>
			<p class="text-md text-gray-300">{project.description}</p>
			<Tags tags={project.tags} />
			<button class="text-sm border border-white rounded-full w-fit px-3 py-1 duration-200 ease-in">
				<a href={`/projects/${project.path}`}>Learn More</a>
			</button>
		</div>
	</div>
</AnimatedElement>
