'use server';

import { prisma } from '@/db';
import { redirect } from 'next/navigation';

export default async function createTask(data: FormData) {
	'use server';
	const title = data.get('title') as string;
	const status = (data.get('status') as string) || 'Todo';
	const priority = (data.get('priority') as string) || 'Low';
	if (title.length == 0) {
		throw new Error('Invalid Title');
	}

	await prisma.task.create({
		data: {
			title,
			status,
			priority
		}
	});
	redirect('/task-board');
}
