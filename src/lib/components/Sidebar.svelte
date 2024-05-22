<script>
	import card from '$lib/Images/Card.png';
	import dice from '$lib/Images/Dice.png';
	import { slide } from 'svelte/transition';

	export let openSide = true;
</script>

<div
	class={`z-10  h-screen w-[400px] bg-black bg-opacity-85  shadow-default 
		transition-all md:block`}
>
	<div class={`grid w-full shadow-default ${openSide ? 'open flex-row ' : 'close flex-col'}`}>
		<div
			on:click={() => (openSide = !openSide)}
			class="group flex h-[64px] cursor-pointer items-center justify-center overflow-visible"
		>
			<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					class="transition-colors duration-200 group-hover:text-theme-primary-400"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 10h16M4 14h16M4 18h16"
				/>
			</svg>
		</div>
		<div class="group flex h-[64px] cursor-pointer flex-row items-center justify-center">
			<img
				class={`${openSide ? 'w-7' : 'w-9'} opacity-70 brightness-[7] transition-all duration-100 group-hover:scale-105 group-hover:brightness-[1.3]`}
				src={card}
				alt=""
				srcset=""
			/>

			{#if openSide}
				<span
					class="ml-2 text-xl font-semibold transition-colors duration-200 group-hover:text-theme-primary-400"
					>홀덤</span
				>
			{/if}
		</div>
		<div class="group flex h-[64px] cursor-pointer flex-row items-center justify-center">
			<img
				class={`${openSide ? 'w-7' : 'w-9'} opacity-70 brightness-[7] transition-all duration-100 group-hover:scale-105 group-hover:brightness-[1.1]`}
				src={dice}
				alt=""
				srcset=""
			/>

			{#if openSide}
				<span
					class="ml-2 text-xl font-semibold transition-colors duration-200 group-hover:text-theme-primary-400"
					>카지노</span
				>
			{/if}
		</div>
	</div>
</div>

<style>
</style>
