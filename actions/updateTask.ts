'use server';

import { Task } from '@/types/task';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function updateTask(id: string | undefined, data: Task) {
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
