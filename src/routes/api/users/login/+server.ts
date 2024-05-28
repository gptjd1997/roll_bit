import { generateToken } from '$lib/auth.js';
import { query } from '$lib/db.js';
import { setUser } from '../../../../stores/user.js';

export async function POST({ request }) {
	try {
		const { id, password } = await request.json();

		const [user] = await query('SELECT * FROM users WHERE id = ? AND password = ?', [id, password]);
		if (user) {
			('User found');
			setUser(user);
			const token = generateToken(user);
			return new Response(JSON.stringify({ token, user }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} else {
			throw new Error('Invalid user');
		}
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
