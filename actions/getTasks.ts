import { prisma } from "@/db";
import { cache } from "react";

async function getTasks(searchParams: { [key: string]: string | undefined }) {
	let tasks = [];
	console.log('GET TASK:', searchParams)


	let filterCondition: { priority: string }[] = [];
	if (searchParams.priority != '') {
		let priorities: string[] = searchParams.priority?.split(',') || [];
		priorities.forEach((p: string) => {
			filterCondition.push({ priority: p });
		});
	}


	if (filterCondition.length) {
		tasks = await prisma.task.findMany({
			where: {
				OR: [
					...filterCondition
				]
			}
		});
	} else {
		tasks = await prisma.task.findMany();
	}
	return tasks;
}

export const getTaskCached = cache(getTasks)