import { WebSocketServer, WebSocket } from 'ws';
import http from 'http';

let wss;

export async function handle({ event, resolve }) {
	if (!wss) {
		const server = new http.Server();

		wss = new WebSocketServer({ server });

		wss.on('connection', (ws, req) => {
			const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
			console.log('새로운 클라이언트 접속 ip : ', ip);

			ws.on('message', (message) => {
				// Parse the message here
				const data = JSON.parse(message);
				try {
					wss.clients.forEach((client) => {
						console.log(client.readyState, WebSocket.OPEN);
						if (client !== ws && client.readyState === WebSocket.OPEN) {
							client.send(JSON.stringify(data));
							console.log(JSON.stringify(data));
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
