import { prisma } from '@/db';
import AddEditForm from '../add-edit-form';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
const Task: React.FC<{ params: Params }> = async ({ params }) => {
	const task = await prisma.task.findUnique({
		where: {
			id: params.slug
		}
	});
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<Breadcrumb className="py-10">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/task-board">Task Board</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink>{params.slug}</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h1 className="text-7xl font-bold">Edit Task</h1>
			<p>{"Update your task and click save when you're done."}</p>
			<AddEditForm data={task} />
		</div>
	);
};

export default Task;
