'use server';

import { Task } from '@/types/task';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function createTask(data: Task) {
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
