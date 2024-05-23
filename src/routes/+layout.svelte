<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import LeftSide from '$lib/components/LeftSide.svelte';
	import RightSide from '$lib/components/RightSide.svelte';
	let openLeftSide = false;
	let openRightSide = false;
	const toggleLeftSide = () => {
		openLeftSide = !openLeftSide;
	};
	const toggleRightSide = () => {
		openRightSide = !openRightSide;
	};
</script>

<div class={`${openLeftSide ? 'openWrap' : 'closeWrap'} h-full w-full transition-all md:grid`}>
	<LeftSide {openLeftSide} {toggleLeftSide} />
	<div class="relative flex w-full flex-col overflow-hidden">
		<!-- Header -->
		<Header {toggleRightSide} />
		<!-- Contents -->
		<div class="flex h-full w-full flex-col bg-theme-surface-900 pt-[80px]">
			<slot></slot>
		</div>
	</div>
	<RightSide {openRightSide} toggleSide={() => toggleSide(openRightSide)} />
</div>

<style>
	.openWrap {
		grid-template-columns: 384px 1fr auto;
	}
	.closeWrap {
		grid-template-columns: 64px 1fr auto;
	}
</style>
