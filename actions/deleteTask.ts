'use server';

import { prisma } from '@/db';
import { revalidatePath } from 'next/cache';
export default async function deleteTask(id: string) {
	'use server';
	await prisma.task.delete({
		where: {
			id: id
		}
	});
	revalidatePath('/task-board', 'layout');
}
