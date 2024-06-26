import { prisma } from '@/db';
import { cache } from 'react';
import { revalidatePath } from 'next/cache';
import { Task } from '@/types/task';

const getTasks = async function (searchParams: { [key: string]: string | undefined }) {
	let tasks = [];

	// let filterCondition: { priority: string }[] = [];
	// if (searchParams.priority != '') {
	// 	let priorities: string[] = searchParams.priority?.split(',') || [];
	// 	priorities.forEach((p: string) => {
	// 		filterCondition.push({ priority: p });
	// 	});
	// }

	try {
		if (!(searchParams.priority == undefined && searchParams.status == undefined)) {
			tasks = await prisma.task.findMany({
				where: {
					AND: [{ priority: searchParams.priority }, { status: searchParams.status }]
				}
			});
		} else {
			tasks = await prisma.task.findMany();
		}
	} catch (e) {
		return { error: e };
	}

	revalidatePath('/task-board', 'layout');
	return tasks;
};

export const getTaskCached = cache(getTasks);
