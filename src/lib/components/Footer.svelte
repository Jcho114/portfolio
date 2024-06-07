<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if !$page.error}
	<div class="h-[15rem] flex justify-center items-center">Footer</div>
{/if}
