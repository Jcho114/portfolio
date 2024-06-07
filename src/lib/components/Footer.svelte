<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

{#if !$page.error}
	<main class="h-[15rem] flex flex-col justify-center items-center gap-3">
		<div class="flex justify-center items-center gap-3 text-3xl">
			<a href="https://github.com/Jcho114" target="_blank"><Icon icon="mdi:github" /></a>
			<a href="https://www.linkedin.com/in/jcho1114/" target="_blank"><Icon icon="mdi:linkedin" /></a>
			<a href="mailto:joseph.cho20@gmail.com"><Icon icon="mdi:email" /></a>
		</div>
	</main>
{/if}
