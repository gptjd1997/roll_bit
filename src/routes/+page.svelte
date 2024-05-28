<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { clearUser, setUser } from '../stores/user';

	let id: Number;
	let password: string;

	const userSubmit = async () => {
		const res = await fetch(`/api/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id, password })
		});

		const data = await res.json();

		if (data.token) {
			document.cookie = `jwt=${data.token} path=/`;
			setUser(data.user);

			alert('Login Success');
			redirect('/', { replace: true });
		} else {
			alert('Login Failed');
		}
		id = null;
		password = '';
	};
</script>

<main>
	<!-- Add your HTML markup here -->
	<input
		bind:value={id}
		type="text"
		id="id"
		class="my-2 block h-14 rounded-lg border border-gray-300 bg-gray-50 p-2.5
	text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700
	dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		placeholder="id"
		required
	/><input
		bind:value={password}
		type="password"
		id="password"
		class="my-2 block h-14 rounded-lg border border-gray-300 bg-gray-50 p-2.5
text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700
dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		placeholder="password"
		required
	/>
	<button
		on:click={userSubmit}
		type="submit"
		class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Submit</button
	>
</main>

<style>
	/* Add your styles here */
</style>
