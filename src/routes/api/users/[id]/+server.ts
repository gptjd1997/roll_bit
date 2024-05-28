import { query } from '$lib/db';

export async function GET({ params }) {
	try {
		const rows = await query('SELECT * FROM users WHERE id = ?', [params.id]);

		return new Response(JSON.stringify(rows[0]));
	} catch (error) {
		console.error('Database query failed', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch users from the database.' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
