<script lang="ts">
	let id: Number;

	const userSubmit = () => {
		// const res = await fetch(`/api/`);
	};
</script>

<main>
	<!-- Add your HTML markup here -->
	<input
		bind:value={id}
		type="text"
		id="id"
		class="block w-full rounded-lg border border-gray-300 bg-gray-50
	p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700
	dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		placeholder="id"
		required
	/>
	<button
		on:click={userSubmit}
		type="submit"
		class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Submit</button
	>
</main>

<style>
	/* Add your styles here */
</style>
