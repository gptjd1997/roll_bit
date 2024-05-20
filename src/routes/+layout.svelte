<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="bg-theme-surface-900 shadow-default fixed z-10 h-screen w-0 md:w-16 lg:w-56">dd</div>

<div class="bg-theme-surface-900 ml-0 flex w-full flex-col md:ml-16 lg:ml-56">
	<Header></Header>

	<div
		class="m-auto flex h-full w-fit flex-col gap-7 px-10 py-7 sm:max-w-screen-sm md:max-w-[710px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px]"
	>
		<slot></slot>
	</div>
</div>
