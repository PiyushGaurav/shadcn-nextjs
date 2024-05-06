'use server';

import { prisma } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function updateTask(id: string | undefined, data: FormData) {
	'use server';

	try {
		const title = data.get('title') as string;
		const status = (data.get('status') as string) || 'Todo';
		const priority = (data.get('priority') as string) || 'Low';
		await prisma.task.update({
			where: {
				id: id
			},
			data: {
				title,
				status,
				priority
			}
		});
	} catch (e) {
		return { error: e };
	}

	revalidatePath('/task-board', 'layout');
	redirect('/task-board');
}
