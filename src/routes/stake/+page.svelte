<script>
	import Autocomplete from '$lib/api/Autocomplete.svelte';
	import Swiper from '$lib/api/Swiper.svelte';
	export let data = [];
	export let { games } = data;
	export let error = null;
	let parent;
</script>

<div class="m-auto flex w-8 w-auto flex-col gap-9">
	<Autocomplete {games}></Autocomplete>

	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
	<Swiper {games}></Swiper>
</div>
