<script>
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	import { onMount } from 'svelte';
	export let games;

	let swiperWrap;

	let swiper;
	let swiperEl;
	let prevEl;
	let nextEl;
	const swiperParams = {
		allowTouchMove: false,
		spaceBetween: 10,
		breakpoints: {
			1600: {
				slidesPerView: 8
			},
			1400: {
				slidesPerView: 7
			},
			1200: {
				slidesPerView: 6
			},
			992: {
				slidesPerView: 5
			},
			768: {
				slidesPerView: 4
			},
			576: {
				slidesPerView: 3
			},
			0: {
				slidesPerView: 2
			}
		}
	};

	let slidesPerView;
	let activeIndex;
	let isEnd;
	let Changed = false;

	onMount(() => {
		// now we need to assign all parameters to Swiper element
		Object.assign(swiperEl, swiperParams);

		// and now initialize it
		swiperEl.initialize();
		swiper = swiperEl.swiper;
		slidesPerView = swiper.params.slidesPerView;
		activeIndex = swiper.activeIndex;

		swiper.on('slideChange', () => {
			Changed = true;
			activeIndex = swiper.activeIndex;
			isEnd = swiper.isEnd;
		});
		swiper.on('');
	});
</script>

<svelte:window
	on:resize={() => {
		slidesPerView = swiper.params.slidesPerView;
		console.log(swiperWrap.clientWidth);
	}}
/>
<div bind:this={swiperWrap} class="mx-3 w-auto md:mx-auto">
	<div>
		<div class="mb-2 flex justify-between">
			<div class="flex items-end gap-2">
				<svg fill="currentColor" viewBox="0 0 64 64" width="20">
					<path
						d="M7.36 42.39c1-12.78 14.728-25.29 17.926-29.976 2.778-4.206 1.719-9.203.83-11.4a.78.78 0 0 1 .893-1h-.004c13.889 2.918 14.588 13.48 14.168 18.206-.42 4.726.42 7.913 3.478 7.224 3.057-.69 2.028-8.443 2.028-8.443s14.039 16.676 8.893 33.073c-2.588 8.574-9.033 12.19-14.449 13.89-.28.14-.56-.14-.56-.55.7-2.638 2.509-4.726 3.058-7.644 1.12-4.796-3.327-9.213-6.624-11.71-2.063-1.538-3.386-3.97-3.386-6.712 0-.127.002-.255.008-.381v.018c0-.28-.42-.42-.55-.28a90.106 90.106 0 0 1-6.652 7.202l-.022.022c-5.136 5.696-7.784 12.09-3.197 19.175.14.28-.14.69-.41.56C11.387 60.596 6.67 51.973 7.36 42.39Z"
					></path>
				</svg>
				<p class=" text-2xl font-semibold leading-[0.9]">Stake 오리지널</p>
			</div>
			<div class="mx-2">
				<button
					on:click={() => {
						const isBeginning = swiper.isBeginning;
						if (!isBeginning) {
							swiper.slideTo(swiper.realIndex - swiper.params.slidesPerView);
						} else {
							swiper.slideTo(swiper.slides.length);
						}
					}}
					bind:this={prevEl}
					class="rounded-l-2xl border-2 border-theme-surface-800 bg-theme-surface-900 p-2"
				>
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="19" y1="12" x2="5" y2="12" /> <polyline points="12 19 5 12 12 5" /></svg
					>
				</button>
				<button
					on:click={() => {
						if (!isEnd) {
							swiper.slideTo(swiper.realIndex + swiper.params.slidesPerView);
						} else {
							swiper.slideTo(0);
						}
					}}
					bind:this={nextEl}
					class="rounded-r-2xl border-2 border-l-0 border-theme-surface-800 bg-theme-surface-900 p-2"
					><svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="5" y1="12" x2="19" y2="12" /> <polyline points="12 5 19 12 12 19" /></svg
					></button
				>
			</div>
		</div>
		<div class="relative z-50">
			<swiper-container
				bind:this={swiperEl}
				speed="500"
				loop="true"
				class=" w-full shadow-swiper md:max-w-[700px] lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl"
			>
				{#each games as game, idx}
					<swiper-slide
						class={`${activeIndex + slidesPerView - 1 <= idx && !isEnd ? 'delay-75 md:animate-swiperOpacity' : ''} relative flex w-1/2  flex-col  `}
					>
						<div
							class="z-50 cursor-pointer pt-3
						transition-transform duration-300 hover:-translate-y-3"
						>
							<img loading="lazy" class="w-full rounded-xl" src={game.image} alt="" />
						</div>
						<div class="relative h-7 overflow-hidden">
							<div
								class="pulse absolute animate-pulse overflow-hidden text-5xl font-extrabold leading-9 text-green-500 drop-shadow-greenShadow md:-left-1 md:-top-1 md:text-3xl 3xl:-left-2 3xl:-top-1 3xl:text-4xl"
							>
								ㆍ
							</div>
							<div
								class="absolute left-9 top-1 text-xl font-light tracking-wider md:left-5 md:text-sm 3xl:text-base"
							>
								7,625 플레이중
							</div>
						</div>
					</swiper-slide>
				{/each}
			</swiper-container>
			<div
				class={`${!isEnd ? 'md:animate-swiperBoxShadow' : !Changed ? 'md:animate-swiperBoxShadowReverse' : 'animate-none'} pointer-events-none absolute right-0 top-0 z-50 h-full w-full `}
			></div>
		</div>
	</div>
</div>
