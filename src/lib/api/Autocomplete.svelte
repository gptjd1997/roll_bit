<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade, slide } from 'svelte/transition';

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
	<div
		transition:fade={{ duration: 100 }}
		class="fixed left-0 top-0 z-[60] h-full w-full bg-black opacity-50 blur-3xl backdrop-filter transition-all"
	/>
{/if}

<div class="autocomplete relative z-[60]">
	<input
		class="w-full rounded-full border border-theme-surface-700 bg-theme-surface-800 p-2 px-11 text-lg drop-shadow-sm"
		type="text"
		bind:value={input}
		on:focus={handleFocus}
		on:input={handleInput}
		on:blur={handleBlur}
		placeholder="게임 검색"
	/>
	<svg
		class="absolute left-3 top-2.5 text-2xl opacity-50"
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		><path
			fill="currentColor"
			d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
		/>
	</svg>
	{#if showSuggestions}
		<div
			transition:fade={{ duration: 100 }}
			class="suggestions absolute left-0 top-14 min-h-36 w-full rounded-lg bg-theme-surface-800 p-2 pb-10 shadow-lg backdrop-blur-3xl"
		>
			{#if suggestions[0]}
				{#each suggestions as suggestion}
					<div
						class="suggestion group block w-44 rounded-lg text-white transition-all duration-200 hover:bg-theme-surface-600"
						on:click={() => selectSuggestion(suggestion.name)}
					>
						<img
							class="rounded-lg duration-200 group-hover:scale-105"
							src={suggestion.image}
							alt=""
						/>
					</div>
				{/each}
			{:else}
				<div transition class="m-auto text-lg text-theme-surface-300">
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
