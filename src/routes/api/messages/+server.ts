import { query } from '$lib/db';

export async function GET(params) {
	try {
		const messages = await query(
			'SELECT m.*,r.country,u.name FROM room_messages rm JOIN messages m ON rm.message_id = m.id JOIN rooms r ON rm.room_id = r.id JOIN users u ON m.user_id = u.id WHERE r.country = ?',
			['korea']
		);
		return new Response(JSON.stringify(messages), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Database query failed', error);
	}
}

export async function POST({ request }) {
	const params = await request.json();
	try {
		const [room] = await query('SELECT id FROM rooms WHERE country = ?', [params.country]);
		const insert = await query(
			'INSERT INTO messages (user_id, room_id, contents) VALUES (?, ?, ?)',
			[params.userId, room.id, params.contents]
		);

		const roomMessageInsertId = await query(
			'INSERT INTO room_messages (room_id, message_id) VALUES (?, ?)',
			[room.id, insert.insertId]
		);

		return new Response(JSON.stringify({ roomMessageInsertId }), {
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
