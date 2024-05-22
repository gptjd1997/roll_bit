<script>
	import Autocomplete from '$lib/api/Autocomplete.svelte';
	import Swiper from '$lib/api/Swiper.svelte';
	export let data = [];
	export let { games } = data;
	export let error = null;
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
