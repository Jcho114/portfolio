<script lang="ts">
	import type Tag from '../types/Tag.ts';
	import { tagColorMapping } from '../types/Tag';
	export let tags: Tag[];
</script>

<div class="flex gap-3 my-2 flex-wrap">
	{#each tags as tag (tag)}
		<p
			class="text-sm border rounded-full px-3 py-1 w-fit h-fit"
			style={`background-color: ${tagColorMapping[tag]}25; border-color: ${tagColorMapping[tag]}; color: ${tagColorMapping[tag]}`}
		>
			{tag}
		</p>
	{/each}
</div>
