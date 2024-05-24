<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import LeftSide from '$lib/components/LeftSide.svelte';
	import RightSide from '$lib/components/RightSide.svelte';

	let openLeftSide = false;
	let openRightSide = true;

	const toggleLeftSide = () => (openLeftSide = !openLeftSide);
	const toggleRightSide = () => (openRightSide = !openRightSide);

	$: layoutClass = openLeftSide ? 'openWrap' : 'closeWrap';
</script>

<div class={`${layoutClass} h-full w-full overflow-hidden transition-all md:grid`}>
	<LeftSide {openLeftSide} {toggleLeftSide} />
	<div class="relative flex w-full flex-col overflow-y-scroll">
		<Header {toggleRightSide} />
		<div class="m-auto flex h-full w-full max-w-[1400px] flex-col pt-[80px] lg:w-9/12">
			<slot></slot>
		</div>
	</div>
	<RightSide {openRightSide} {toggleRightSide} />
</div>

<style>
	.openWrap {
		grid-template-columns: 384px 1fr auto;
	}
	.closeWrap {
		grid-template-columns: 64px 1fr auto;
	}
</style>
