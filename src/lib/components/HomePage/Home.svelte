<script lang="ts">
	import { page } from '$app/stores';
	import tilt from '../../util/tilt';
	import handleAnchorClick from '$lib/util/handleAnchorClick';
</script>

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
	<div
		use:tilt={{ scale: 1.15, reverse: false }}
		data-testid="card"
		class="rounded w-[22.5%] aspect-[3/4] bg-white text-black flex flex-col justify-center items-center gap-3 max-md:hidden"
	>
		<p class="font-semibold text-lg">Class of 2025</p>
		<p></p>
	</div>
</div>
