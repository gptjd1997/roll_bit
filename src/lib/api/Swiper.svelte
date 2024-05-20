<script>
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	import Diamonds from '$lib/Images/Diamonds.avif';
	import Dice from '$lib/Images/Dice.avif';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	export let games;

	let swiper;
	let swiperEl;
	let prevEl;
	let nextEl;
	const swiperParams = {
		allowTouchMove: false,
		spaceBetween: 10,
		breakpoints: {
			1400: {
				slidesPerView: 7

				//   spaceBetween: 20
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
	let isEnd;

	onMount(() => {
		// now we need to assign all parameters to Swiper element
		Object.assign(swiperEl, swiperParams);

		// and now initialize it
		swiperEl.initialize();
		swiper = swiperEl.swiper;
		slidesPerView = swiper.params.slidesPerView;

		swiper.on('slideChange', () => {
			isEnd = swiper.isEnd;
			console.log(isEnd);
		});
	});
</script>

<svelte:window on:resize={() => (slidesPerView = swiper.params.slidesPerView)} />
<div class="w-auto">
	<div>
		<div class="mb-2 flex justify-between">
			<div class="flex items-end">Stake 오리지널</div>
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
		<div>
			<swiper-container
				bind:this={swiperEl}
				speed="500"
				loop="true"
				class={`flex items-end sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl ${isEnd ? 'gap-3' : ''} `}
			>
				{#each games as game, idx}
					<swiper-slide
						class={`${(idx + 1) % slidesPerView == 0 && !isEnd ? 'opacity-30' : ''} ${isEnd ? '' : 'mx-3'} flex flex-col`}
					>
						<div class="relative">
							<img
								loading="lazy"
								class=" rounded-lg 2xl:max-w-screen-2xl"
								src={game.image}
								alt=""
							/>
						</div>
						<div class="relative h-6 overflow-hidden">
							<div
								class="pulse absolute -top-1.5 animate-pulse overflow-hidden text-[25px] font-extrabold leading-9 text-green-500 drop-shadow-greenShadow 3xl:-left-1 3xl:-top-1 3xl:text-4xl"
							>
								ㆍ
							</div>
							<div class="absolute left-5 top-1 text-xs font-light tracking-wider 3xl:text-base">
								7,625 플레이중
							</div>
						</div>
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
	</div>
</div>
