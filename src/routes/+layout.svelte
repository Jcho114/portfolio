<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

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
	style={`background: radial-gradient(circle at ${x + xScroll}px ${y + yScroll}px, rgba(11,34,56,1) 0%, rgba(2,16,28,1) 100%);`}
>
	<NavBar />
	<slot />
	<Footer />
</main>
