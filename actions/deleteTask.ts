'use server';

import { prisma } from '@/db';
import { revalidatePath } from 'next/cache';
export default async function deleteTask(id: string) {
	'use server';

	try {
		await prisma.task.delete({
			where: {
				id: id
			}
		});
	} catch (e) {
		return { error: e };
	}

	revalidatePath('/task-board', 'layout');
}
