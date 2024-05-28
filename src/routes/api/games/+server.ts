import { query } from '$lib/db';

export async function GET() {
	('GET /api/games called');
	try {
		const rows = await query('SELECT * FROM games');
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
