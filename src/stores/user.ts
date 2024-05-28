import { writable } from 'svelte/store';

export const user = writable(null);

export function setUser(userData) {
	user.set(userData);
}

export function clearUser() {
	user.set(null);
	document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
