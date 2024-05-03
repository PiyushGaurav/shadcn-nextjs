import { prisma } from "@/db";
import { cache } from "react";
import { revalidatePath } from 'next/cache';

async function getTasks(searchParams: { [key: string]: string | undefined }) {
	let tasks = [];

	// let filterCondition: { priority: string }[] = [];
	// if (searchParams.priority != '') {
	// 	let priorities: string[] = searchParams.priority?.split(',') || [];
	// 	priorities.forEach((p: string) => {
	// 		filterCondition.push({ priority: p });
	// 	});
	// }


	if (!(searchParams.priority == undefined && searchParams.status == undefined)) {
		tasks = await prisma.task.findMany({
			where: {
				AND: [
					{ priority: searchParams.priority },
					{ status: searchParams.status }
				],
			}
		});
	} else {
		tasks = await prisma.task.findMany();
	}
	revalidatePath('/task-board', 'layout');
	return tasks;
}

export const getTaskCached = cache(getTasks)