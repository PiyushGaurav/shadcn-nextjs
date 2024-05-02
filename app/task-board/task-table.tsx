import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUp, ArrowDown, ArrowRight, Circle, CircleCheck, CircleHelp, CircleX, Timer } from 'lucide-react';
import TableOptionButton from '@/app/task-board/table-option-button';
import { Task } from '@/types/task';
import { prisma } from '@/db';

export default async function TaskTable() {
	const tasks = await prisma.task.findMany();

	const renderStatusIcon = (status: string | null) => {
		switch (status) {
			case 'Canceled':
				return <CircleX />;
			case 'In Progress':
				return <Timer />;
			case 'Backlog':
				return <CircleHelp />;
			case 'Done':
				return <CircleCheck />;
			default:
				return <Circle />;
		}
	};

	const renderPriorityIcon = (priority: string | null) => {
		switch (priority) {
			case 'High':
				return <ArrowUp />;
			case 'Low':
				return <ArrowDown />;
			default:
				return <ArrowRight />;
		}
	};

	if (tasks.length == 0) {
		return <p className="p-4 text-center">No Task Found! Try to add more Task.</p>;
	}

	return (
		<Table className="overflow-hidden">
			<TableHeader>
				<TableRow>
					<TableHead className="ml-2">
						<div className="flex gap-2 items-center">Title</div>
					</TableHead>
					<TableHead className="pl-10">Status</TableHead>
					<TableHead className="pl-10">Priority</TableHead>
					<TableHead className="text-right pr-10">Action</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{tasks.map(({ id, title, status, priority }: Task) => (
					<TableRow key={title}>
						<TableCell>
							<div className="flex gap-2 items-center">{title}</div>
						</TableCell>
						<TableCell>
							<div className="flex gap-2 items-center">
								{renderStatusIcon(status)}
								{status}
							</div>
						</TableCell>
						<TableCell>
							<div className="flex gap-2 items-center">
								{renderPriorityIcon(priority)}
								{priority}
							</div>
						</TableCell>
						<TableCell className="flex gap-2 items-center justify-end">
							<TableOptionButton id={id} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
