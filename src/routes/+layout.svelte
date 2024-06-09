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

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p {
			font-family: Montserrat;
		}
	</style>
</svelte:head>

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
