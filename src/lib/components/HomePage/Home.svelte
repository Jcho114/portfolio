<script lang="ts">
	import { page } from '$app/stores';
	import handleAnchorClick from '$lib/util/handleAnchorClick';
	import CardContainer from '../external/ThreeDCardEffect/CardContainer.svelte';
	import CardBody from '../external/ThreeDCardEffect/CardBody.svelte';
	import CardItem from '../external/ThreeDCardEffect/CardItem.svelte';
	import Code from './Code.svx';
	let isMouseEntered = false;
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-gruvbox-dark.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex justify-center items-center h-full-with-navbar gap-x-[10vw]">
	<div class="flex flex-col justify-center gap-0.5 max-md:scale-75">
		<p class="text-8xl font-semibold">Joseph Cho</p>
		<div class="h-5" />
		<p class="text-xl text-gray-300">Full Stack Developer</p>
		<p class="text-xl text-gray-300">Computer Science and Statistics at University of Maryland</p>
		<div class="h-6" />
		<a
			href="/#projects"
			class="w-fit"
			on:click={(event) => handleAnchorClick(event, $page.route.id || '')}
		>
			<p class="border w-fit px-4 py-1 rounded-full text-lg text-gray-300 hover">Scroll ↓</p>
		</a>
	</div>
	<div data-testid="card">
		<CardContainer bind:isMouseEntered>
			<CardBody className="rounded w-fit h-fit max-md:hidden bg-[#1D2021] px-10 py-12">
				<CardItem {isMouseEntered} translateZ={25}>
					<Code />
				</CardItem>
			</CardBody>
		</CardContainer>
	</div>
</div>
