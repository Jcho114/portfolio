<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	let xScroll = 0,
		yScroll = 0;

	let x = 0,
		y = 0;
	const onmousemove = (event: MouseEvent) => {
		x = event.screenX;
		y = event.screenY;
	};
</script>

<svelte:window bind:scrollX={xScroll} bind:scrollY={yScroll} />

<main
	on:mousemove={onmousemove}
	on:scroll={onscroll}
	class="text-white"
	style={`background: radial-gradient(circle at ${x + xScroll}px ${y + yScroll}px, rgba(19,57,92,1) 0%, rgba(10,34,55,1) 100%);`}
>
	<NavBar />
	<slot />
</main>
