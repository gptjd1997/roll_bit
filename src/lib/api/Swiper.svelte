<script>
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	import Diamonds from '$lib/Images/Diamonds.avif';
	import Dice from '$lib/Images/Dice.avif';
	import { onMount } from 'svelte';

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

	onMount(() => {
		// now we need to assign all parameters to Swiper element
		Object.assign(swiperEl, swiperParams);

		// and now initialize it
		swiperEl.initialize();
		console.log(prevEl);

		swiperEl.on('slideChange', () => {
			console.log('this');
		});
	});
</script>

<div class="w-auto">
	<div>
		<div class="mb-2 flex justify-between">
			<div class="flex items-end">Stake 오리지널</div>
			<div class="mx-2">
				<button
					on:click={() => {
						const currentSwiper = swiperEl.swiper;
						const isBeginning = currentSwiper.isBeginning;
						if (!isBeginning) {
							currentSwiper.slideTo(currentSwiper.realIndex - currentSwiper.params.slidesPerView);
						} else {
							currentSwiper.slideTo(currentSwiper.slides.length);
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
						const currentSwiper = swiperEl.swiper;
						const isEnd = currentSwiper.isEnd;
						if (!isEnd) {
							currentSwiper.slideTo(currentSwiper.realIndex + currentSwiper.params.slidesPerView);
						} else {
							currentSwiper.slideTo(0);
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
				class="w-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl"
			>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Diamonds} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse drop-shadow-greenShadow absolute -top-1.5 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Dice} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse drop-shadow-greenShadow absolute -top-1.5 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Diamonds} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse drop-shadow-greenShadow absolute -top-1.5 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Dice} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse drop-shadow-greenShadow absolute -top-1.5 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Diamonds} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse drop-shadow-greenShadow absolute -top-1.5 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Dice} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse drop-shadow-greenShadow absolute -top-1.5 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Diamonds} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse drop-shadow-greenShadow absolute -top-1.5 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Dice} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse.5 drop-shadow-greenShadow absolute -top-1 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Diamonds} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse.5 drop-shadow-greenShadow absolute -top-1 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Dice} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse.5 drop-shadow-greenShadow absolute -top-1 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Diamonds} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse.5 drop-shadow-greenShadow absolute -top-1 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Dice} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse.5 drop-shadow-greenShadow absolute -top-1 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
				<swiper-slide class="flex flex-col"
					><img loading="lazy" class=" rounded-lg" src={Diamonds} alt="" />
					<div class="relative h-5 overflow-hidden">
						<div
							class="pulse.5 drop-shadow-greenShadow absolute -top-1 animate-pulse text-[25px] font-extrabold leading-9 text-green-500"
						>
							ㆍ
						</div>
						<div class="absolute left-5 top-1 text-xs font-light tracking-wider">
							7,625 플레이중
						</div>
					</div></swiper-slide
				>
			</swiper-container>
		</div>
	</div>
</div>
