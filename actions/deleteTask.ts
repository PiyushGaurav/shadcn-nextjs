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
	} catch (error) {
		return error;
	}

	revalidatePath('/task-board', 'layout');
}
