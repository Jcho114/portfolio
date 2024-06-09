<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div
	class="wrapper"
	use:inview={{ unobserveOnEnter: true, rootMargin: '0%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade>
			<slot />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		margin-top: 30px;
	}

	.box {
		width: 300px;
		border: 1px solid rgb(221, 221, 221);
		padding: 25px;
		border-radius: 10px;
	}
</style>
