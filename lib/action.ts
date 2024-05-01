'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTask(formData: FormData) {
	'use server';

	const title = formData.get('title');
	const description = formData.get('description');
	if (!title || !description) return null;
	fetch('http://localhost:3000/tasks', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: formData.get('title'),
			description: formData.get('description')
		})
	})
		.then(response => {
			response.json();
		})
		.then(response => {
			console.log(response);
		});

	revalidatePath('/task-board', 'layout');
	redirect('/task-board');
}
