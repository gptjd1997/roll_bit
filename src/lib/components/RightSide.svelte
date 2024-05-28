<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '../../stores/user';

	let socket: WebSocket;
	let inputValue = '';
	let country: string = 'korea';
	$: messages = [];

	$: if ($user) {
		$user;
	} else {
	}

	async function sendMessage() {
		if ($user) {
			let value = {
				contents: inputValue,
				country: 'korea',
				userId: $user.id,
				name: $user.name
			};
			await socket.send(JSON.stringify(value));
			postData(value);
			value = { ...value, me: true };
			messages = [...messages, value];
		} else {
			alert('Please login');
		}

		inputValue = '';
	}

	async function postData(params) {
		await fetch('/api/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(params)
		});
	}
	onMount(async () => {
		const fetched = await fetch(`/api/messages?params=${country}`);
		if (fetched.ok) {
			messages = await fetched.json();
			console.log(messages);
		}
		if (typeof window !== 'undefined') {
			socket = new WebSocket('ws://localhost:3000');

			socket.onopen = () => {
				console.log('Connected to server');
			};

			socket.onmessage = (event) => {
				const parsedData = JSON.parse(event.data);
				messages = [...messages, { ...parsedData, me: false }];
			};

			socket.onclose = () => {
				console.log('Disconnected from server');
				// Reconnect after 5 seconds
			};

			socket.onerror = (error) => {
				console.error('Error:', error);
			};
		}
	});

	const handleKeyPress = (e) => {
		if (inputValue != '') {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				sendMessage();
			}
		}
	};
	export let openRightSide;
</script>

<div
	class={` flex h-screen flex-col   ${openRightSide ? 'w-[450px]' : 'hidden'} overflow-y-auto overflow-x-hidden  transition-all duration-150`}
>
	{#if $user}
		<div class="flex h-full flex-col justify-end p-6">
			{#each messages as message, i}
				<div class=" w-full">
					{#if message.name == $user.name}
						<div class={`float-right mt-3 flex w-fit flex-col `}>
							<div class="rounded-lg rounded-ee-none bg-theme-primary-400 p-2.5 text-white">
								{message.contents}
							</div>
							<div class="flex justify-between">
								<div></div>

								{#if messages[i + 1]?.name != message.name}
									<div class="p-1 text-white">{message.name}</div>
								{/if}
							</div>
						</div>
					{:else}
						<div class={`float-left mt-3 flex w-fit flex-col `}>
							<div class="rounded-lg rounded-es-none bg-theme-secondary-400 p-2.5 text-white">
								{message.contents}
							</div>
							<div class="flex justify-between">
								{#if messages[i + 1]?.name != message.name}
									<div class="p-1 text-white">{message.name}</div>
								{/if}
								<div></div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="flex h-44 flex-col justify-center bg-theme-surface-700 p-3 shadow-default">
			<div class="m-3 h-full w-auto rounded-lg bg-theme-surface-600 p-3">
				<textarea
					required
					bind:value={inputValue}
					on:keypress={handleKeyPress}
					placeholder="Type a message"
					class="mx-auto h-auto w-full resize-none rounded-lg bg-theme-surface-600 text-white outline-none"
				/>
				<div class="flex h-fit flex-row justify-between">
					<div
						class="flex h-9 w-9 items-center justify-center rounded-xl bg-theme-surface-700 p-1 text-2xl text-white"
					>
						+
					</div>
					<div
						class=" flex h-9 items-center justify-center rounded-lg bg-theme-primary-400 p-3 text-lg text-white"
					>
						send
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex h-full items-center justify-center">
			<p>Please login</p>
		</div>
	{/if}
</div>
