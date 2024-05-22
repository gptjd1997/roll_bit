<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex h-full w-full">
	<Sidebar />
	<div class="relative flex w-full flex-col">
		<!-- Header -->
		<Header />
		<!-- Contents -->
		<div class="mt-16 flex h-full w-full flex-col bg-theme-surface-900">
			<div class="w-full flex-col gap-7 overflow-auto py-7">
				<div
					class="m-auto mobile:w-full md:max-w-[710px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] 3xl:max-w-[1400px]"
				>
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</div>
