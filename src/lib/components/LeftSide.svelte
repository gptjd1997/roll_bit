<script>
	import card from '$lib/Images/Card.png';
	import dice from '$lib/Images/Dice.png';
	export let openLeftSide;
	export let toggleLeftSide;
</script>

<div
	class={`gridTemplate z-10  h-screen w-auto bg-theme-surface-700 bg-opacity-85 transition-all
		mobile:hidden md:grid`}
>
	<div
		class={`flex w-full  ${openLeftSide ? 'col-span-6 flex-row shadow-default' : 'row-span-3 flex-col'}`}
	>
		<div
			on:click={toggleLeftSide}
			class={`group flex h-[64px] w-[64px] cursor-pointer items-center justify-center overflow-visible ${!openLeftSide && 'shadow-default'}  `}
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
		<div
			class={`group flex h-[64px] ${openLeftSide ? 'w-1/2' : ''} cursor-pointer flex-row items-center justify-center`}
		>
			<img
				class={`${openLeftSide ? 'w-7' : 'w-9'} opacity-70 brightness-[7] transition-all duration-100 group-hover:scale-105 group-hover:brightness-[1.3]`}
				src={card}
				alt=""
				srcset=""
			/>

			{#if openLeftSide}
				<span
					class="ml-2 text-xl font-semibold transition-colors duration-200 group-hover:text-theme-primary-400"
					>홀덤</span
				>
			{/if}
		</div>
		<div
			class={`group flex h-[64px] ${openLeftSide ? 'w-1/2' : ''} cursor-pointer flex-row items-center justify-center`}
		>
			<img
				class={`${openLeftSide ? 'w-7' : 'w-9'} opacity-70 brightness-[7] transition-all duration-100 group-hover:scale-105 group-hover:brightness-[1.1]`}
				src={dice}
				alt=""
				srcset=""
			/>

			{#if openLeftSide}
				<span
					class="ml-2 text-xl font-semibold transition-colors duration-200 group-hover:text-theme-primary-400"
					>카지노</span
				>
			{/if}
		</div>
	</div>
</div>

<style>
	.gridTemplate {
		grid-template-columns: repeat(auto-fill, 64px);
		grid-template-rows: repeat(auto-fill, 64px);
	}
</style>
