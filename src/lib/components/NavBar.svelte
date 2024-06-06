<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	async function handleAnchorClick(
		event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }
	) {
		if ($page.route.id !== '/') {
			return;
		}

		// To enable smooth scrolling
		event.preventDefault();

		const anchor = event.currentTarget;

		const id = anchor?.getAttribute('href')?.substring(2);

		if (id) {
			const target = document.getElementById(id);
			await goto(`/#${id}`, {replaceState: true, noScroll: true, keepFocus: true});
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
	}
</script>

<nav class="flex flex-row gap-4 justify-center items-center h-navbar bg-transparent">
	<a href="/">Home</a>
	<a href="/#projects" on:click={handleAnchorClick}>Projects</a>
</nav>
