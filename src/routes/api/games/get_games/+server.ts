import { query } from '$lib/db';

export async function GET() {
	console.log('GET /api/games/get_games called');
	try {
		const rows = await query('SELECT * FROM games');
		console.log('Database query successful', rows);
		return new Response(JSON.stringify(rows), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error('Database query failed', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch games from the database.' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
