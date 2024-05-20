<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let input = '';
	let suggestions = [];
	let showSuggestions = false;

	// Example list of suggestions
	let items = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];

	const updateSuggestions = () => {
		if (input.length > 0) {
			suggestions = items.filter((item) => item.toLowerCase().includes(input.toLowerCase()));
		} else {
			suggestions = [];
		}
		showSuggestions = suggestions.length > 0;
	};

	const selectSuggestion = (suggestion) => {
		input = suggestion;
		showSuggestions = false;
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

<div class="autocomplete">
	<input
		class="bg-theme-surface-800 border-theme-surface-700 w-full rounded-full border p-1 px-4 drop-shadow-sm"
		type="text"
		bind:value={input}
		on:input={handleInput}
		on:blur={handleBlur}
		placeholder="Search..."
	/>
	{#if showSuggestions}
		<div class="suggestions bg-theme-surface-800 rounded-lg">
			{#each suggestions as suggestion}
				<div
					class="suggestion hover:bg-theme-warning-800 h-fit"
					on:click={() => selectSuggestion(suggestion)}
				>
					{suggestion}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.autocomplete {
		position: relative;
		width: 100%;
	}
	.suggestions {
		position: absolute;
		display: flex;
		flex-direction: row;
		overflow-y: hidden;
		width: 100%;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin-top: 10px;
		min-height: 100px;
		z-index: 10;
	}
	.suggestion {
		padding: 10px;
		cursor: pointer;
	}
</style>
