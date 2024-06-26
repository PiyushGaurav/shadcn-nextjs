import { prisma } from '@/db';
import AddEditForm from '../../../components/custom/AddEditForm';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
const Task: React.FC<{ params: Params }> = async ({ params }) => {
	const task = await prisma.task.findUnique({
		where: {
			id: params.slug
		}
	});
	return (
		<div className="flex flex-col ">
			<h1 className="text-7xl font-bold">Edit Task</h1>
			<p>{"Update your task and click save when you're done."}</p>
			<AddEditForm data={task} />
		</div>
	);
};

export default Task;
