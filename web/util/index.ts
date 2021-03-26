import { toast } from 'react-toastify';
import { API_URL } from './constants';

export function alertAndUnlock(message: string, element = 'button') {
	const button = document.getElementById(element) as HTMLButtonElement;
	button.disabled = false;

	return toast.error(message);
}

export interface AlgoliaHit {
	id: string;
	name: string;
	slug: string;
}

export async function queryAlgolia(query: string): Promise<AlgoliaHit[]> {
	const q = new URLSearchParams();
	q.set('query', query);
	const res = await fetch(`${API_URL}/query_algolia?${q.toString()}`);
	return res.json();
}

export async function generateGif(id: string, preview = false): Promise<Response> {
	const res = await fetch(`${API_URL}/generate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id, preview }),
	});
	return res;
}
