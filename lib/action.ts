'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTask(data) {
	'use server';

	const { title, status, priority } = data;
	if (!title) return null;
	await fetch('http://localhost:3000/tasks', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title,
			status,
			priority
		})
	});

	revalidatePath('/task-board', 'layout');
	redirect('/task-board');
}

export async function updateTask(id,data) {
	'use server';
	const { title, status, priority } = data;
	await fetch(`http://localhost:3000/tasks/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title,
			status,
			priority
		})
	});

	revalidatePath('/task-board', 'layout');
	redirect('/task-board');
}

export async function deleteTask(id: string) {
	'use server';
	await fetch(`http://localhost:3000/tasks/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	revalidatePath('/task-board', 'layout');
	redirect('/task-board');
}