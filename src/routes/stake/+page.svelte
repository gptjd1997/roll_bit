<script>
	import Autocomplete from '$lib/api/Autocomplete.svelte';
	import Swiper from '$lib/api/Swiper.svelte';
	export let data = [];
	export let { games } = data;
	export let error = null;
</script>

<Autocomplete {games}></Autocomplete>

<Swiper {games}></Swiper>
