export async function load({ fetch }) {
	try {
		const res = await fetch('/api/games');
		if (res.ok) {
			const games = await res.json();
			return {
				games
			};
		} else {
			console.error('Failed to fetch games:', res.statusText);
			return {
				games: [],
				error: 'Failed to fetch games from the API.'
			};
		}
	} catch (error) {
		console.error('Error fetching games:', error);
		return {
			games: [],
			error: 'Error fetching games from the API.'
		};
	}
}
