import { verifyToken } from '$lib/auth';
import { json } from '@sveltejs/kit';
import { setUser } from '../../../../stores/user.js';

export async function GET({ request }) {
	request + 'GET /api/users/me called';
	const authHeader = request.headers.get('authorization');
	if (!authHeader) {
		return json({ error: 'Authorization header is missing' }, { status: 401 });
	}

	const token = authHeader.split(' ')[1];
	const user = verifyToken(token);

	if (!user) {
		return json({ error: 'Invalid token' }, { status: 401 });
	}
	setUser(user);
	return json({ message: 'Welcome to the protected route!', user });
}
