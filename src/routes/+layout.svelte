<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="fixed z-10 h-screen w-0 bg-theme-surface-900 shadow-default md:w-16 lg:w-56">dd</div>

<div class="ml-0 flex w-full flex-col bg-theme-surface-900 md:ml-16 lg:ml-56">
	<Header></Header>

	<div
		class="xl 3xl:max-w-[1600px] m-auto flex h-full w-fit flex-col gap-7 px-10 py-7 sm:max-w-screen-sm md:max-w-[710px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px]"
	>
		<slot></slot>
	</div>
</div>
