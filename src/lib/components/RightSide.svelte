<script>
	import { fly } from 'svelte/transition';

	export let openRightSide;
</script>

{#if openRightSide}
	<div transition:fly class={` h-screen w-96 `}>asdasd</div>
{/if}
