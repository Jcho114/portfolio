<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

{#if !$page.error}
	<main class="h-[15rem] flex flex-col justify-center items-center gap-3">
		<div class="flex justify-center items-center gap-3 text-3xl">
			<a
				data-testid="github"
				href="https://github.com/Jcho114"
				target="_blank"
				class="hover:text-4xl ease-in duration-150"><Icon icon="mdi:github" /></a
			>
			<a
				data-testid="linkedin"
				href="https://www.linkedin.com/in/jcho1114/"
				target="_blank"
				class="hover:text-4xl ease-in duration-150"><Icon icon="mdi:linkedin" /></a
			>
			<a
				data-testid="email"
				href="mailto:joseph.cho20@gmail.com"
				class="hover:text-4xl ease-in duration-150"><Icon icon="mdi:email" /></a
			>
		</div>
	</main>
{/if}
