<script lang="ts">
	import { onMount } from 'svelte';

	let socket: WebSocket;
	let inputValue = '';
	let country: string = 'KR';
	$: messages = [];

	let user = {
		id: 1,
		name: 'John Doe',
		country: 'KR'
	};

	function sendMessage() {
		const value = { value: inputValue, country: user.country, userId: user.id, name: user.name };

		inputValue = '';
		messages = [...messages, JSON.stringify(value)];
		socket.send(JSON.stringify(value));
	}

	onMount(() => {
		console.log('Connecting to server');
		socket = new WebSocket('ws://localhost:3000');

		socket.onopen = () => {
			console.log('Connected to server');
		};

		socket.onmessage = (event) => {
			console.log('Message:', event.data);
			messages = [...messages, event.data];
		};

		socket.onclose = () => {
			console.log('Disconnected from server');
		};

		socket.onerror = (error) => {
			console.error('Error:', error);
		};

		return () => {
			socket.close();
		};
	});
	export let openRightSide;
</script>

<div
	class={` flex h-screen flex-col p-2  ${openRightSide ? 'w-96' : 'w-0'}  transition-all duration-150`}
>
	<div class="h-full">
		{#each messages as message}
			{message}
		{/each}
	</div>
	<div class="m-1 flex justify-center gap-1">
		<input
			placeholder="id"
			bind:value={user.id}
			on:keypress={(e) => e.key == 'Enter' && sendMessage()}
			type="text"
			class="w-full p-2 text-black"
		/>
		<input
			placeholder="name"
			bind:value={user.name}
			on:keypress={(e) => e.key == 'Enter' && sendMessage()}
			type="text"
			class="w-full p-2 text-black"
		/>
		<input
			placeholder="country"
			bind:value={user.country}
			on:keypress={(e) => e.key == 'Enter' && sendMessage()}
			type="text"
			class="w-full p-2 text-black"
		/>
	</div>
	<div class="flex justify-center">
		<input
			bind:value={inputValue}
			on:keypress={(e) => e.key == 'Enter' && sendMessage()}
			type="text"
			class="w-full p-2 text-black"
		/>
	</div>
</div>
