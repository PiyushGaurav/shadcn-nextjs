import { prisma } from '@/db';
import AddEditForm from '../add-edit-form';

export default async function Task({ params }) {
	const task = await prisma.task.findUnique({
		where: {
			id: params.slug
		}
	});
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<h1 className="text-7xl font-bold">Edit Task</h1>
			<p>{"Update your task and click save when you're done."}</p>
			<AddEditForm data={task} />
		</div>
	);
}
