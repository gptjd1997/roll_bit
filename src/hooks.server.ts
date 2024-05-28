import { WebSocketServer, WebSocket } from 'ws';
import http from 'http';
import { query } from '$lib/db';

let wss;

export function handle({ event, resolve }) {
	if (!wss) {
		const server = new http.Server();

		wss = new WebSocketServer({ server });

		wss.on('connection', (ws, req) => {
			const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

			ws.on('message', (message) => {
				// Parse the message here
				const data = JSON.parse(message);
				try {
					wss.clients.forEach((client) => {
						if (client !== ws && client.readyState === WebSocket.OPEN) {
							client.send(JSON.stringify(data));
							// query('INSERT INTO messages (user_id, room_id, contents) VALUES (?, ?, ?)', [userId, 1, data.value]);
						}
					});
				} catch (error) {
					console.log('error', error);
				}
			});

			ws.on('close', () => {
				console.log('Client disconnected');
			});
		});

		server.listen(3000, () => {
			console.log('WebSocket server is running on port 3000');
		});
	}

	return resolve(event);
}
