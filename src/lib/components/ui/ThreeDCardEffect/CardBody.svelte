<script lang="ts">
	import { cn } from '$lib/util/cn';

	export let className: string;
</script>

<div
	class={cn(
		'h-fit w-fit [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
		className
	)}
>
	<slot />
</div>
