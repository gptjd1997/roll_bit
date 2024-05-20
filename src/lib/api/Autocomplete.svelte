<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let input = '';
	let suggestions = [];
	let showSuggestions = false;

	export let games;

	const updateSuggestions = () => {
		if (input.length > 1) {
			suggestions = games.filter((game) =>
				game.keyword.toLowerCase().includes(input.toLowerCase())
			);
		} else {
			suggestions = [];
		}
	};

	const handleFocus = () => {
		showSuggestions = true;
	};

	const selectSuggestion = (suggestion) => {
		input = suggestion;
	};

	const handleInput = (event) => {
		input = event.target.value;
		updateSuggestions();
	};

	const handleBlur = () => {
		setTimeout(() => {
			showSuggestions = false;
		}, 100);
	};
</script>

{#if showSuggestions}
	<div class="fixed left-0 top-0 z-10 h-full w-full bg-black opacity-20" />
{/if}

<div class="autocomplete relative z-40">
	<input
		class="w-full rounded-full border border-theme-surface-700 bg-theme-surface-800 p-1 px-4 drop-shadow-sm"
		type="text"
		bind:value={input}
		on:focus={handleFocus}
		on:input={handleInput}
		on:blur={handleBlur}
		placeholder="Search..."
	/>
	{#if showSuggestions}
		<div
			class="suggestions absolute left-0 top-12 min-h-36 w-full rounded-lg bg-theme-surface-800 shadow-lg hover:cursor-pointer"
		>
			{#if suggestions[0]}
				{#each suggestions as suggestion}
					<div
						class="suggestion block w-44 text-white hover:bg-theme-warning-800"
						on:click={() => selectSuggestion(suggestion)}
					>
						<img class="rounded-lg" src={suggestion.image} alt="" />
					</div>
				{/each}
			{:else}
				<div class="m-auto text-lg text-theme-surface-300">
					검색하려면 최소 2글자 이상 작성해 주세요.
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.autocomplete {
		overflow: visible;
		width: 100%;

		height: 30px;
	}
	.suggestions {
		display: flex;
		flex-direction: row;
		width: 100%;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.suggestion {
		padding: 10px;
		cursor: pointer;
	}
</style>
