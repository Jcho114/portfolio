<script lang="ts">
	import { page } from '$app/stores';
	import handleAnchorClick from '../util/handleAnchorClick';
</script>

<nav
	class="flex flex-row justify-between items-center h-navbar w-screen max-w-full overflow-hidden bg-transparent px-8"
>
	<div>
		<a href="/" class="text-lg origin-center hover:text-xl ease-in duration-150 font-semibold"
			>Joseph Cho</a
		>
	</div>
	<div class="flex flex-row gap-4 items-center">
		<a href="/" class="text-lg origin-center hover:text-xl ease-in duration-150 font-semibold"
			>Home</a
		>
		<a
			href="/#projects"
			class="text-lg origin-center hover:text-xl ease-in duration-150 font-semibold"
			on:click={(event) => handleAnchorClick(event, $page.route.id || '')}>Projects</a
		>
		<a
			href="https://drive.google.com/file/d/1T7JHNHPY5BiIlkK2a7DZ0knPU0CqpQHG/view?usp=sharing"
			class="text-lg origin-center hover:text-xl ease-in duration-150 font-semibold"
			target="_blank">Resume</a
		>
	</div>
</nav>
