import { prisma } from "@/db";
import { cache } from "react";

async function getTasks(priorities: string | undefined) {
	let tasks = [];

	let filterCondition = [];
	if (priorities != undefined) {
		let { High, Medium, Low } = JSON.parse(priorities);
		if (High) {
			filterCondition.push({ priority: "High" });
		}
		if (Medium) {
			filterCondition.push({ priority: "Medium" });
		}
		if (Low) {
			filterCondition.push({ priority: "Low" });
		}
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