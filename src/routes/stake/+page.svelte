<script>
	import Autocomplete from '$lib/components/Autocomplete.svelte';
	import Swiper from '$lib/components/Swiper.svelte';
	export let data = [];
	export let { games } = data;
	export let error = null;
	let parent;
</script>

<div class="flex flex-col gap-9">
	<Autocomplete {games}></Autocomplete>

	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
</div>
