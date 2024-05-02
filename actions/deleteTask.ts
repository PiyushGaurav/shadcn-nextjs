'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
export default async function deleteTask(id: string) {
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