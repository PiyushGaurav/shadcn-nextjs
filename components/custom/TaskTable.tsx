import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowUp, ArrowDown, ArrowRight, Circle, CircleCheck, CircleHelp, CircleX, Timer } from 'lucide-react';
import TableOptionButton from '@/components/custom/TableRowActionButton';
import { Task } from '@/types/task';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getTaskCached } from '@/actions/getTasks';
import { StatusFilterButton } from './StatusFilterButton';
import { ScrollArea } from '@/components/ui/scroll-area';
import PriorityFilterButton from './PriorityFilterButton';

export default async function TaskTable({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
	const tasks = await getTaskCached(searchParams);

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

	return (
		<ScrollArea>
			<div className="flex gap-2 justify-end items-center h-10">
				<StatusFilterButton />
				<PriorityFilterButton />
				<Link href="/task-board/new" legacyBehavior passHref>
					<Button variant="outline">Add Task</Button>
				</Link>
			</div>
			<div className="border rounded-md my-4">
				{tasks.length == 0 ? (
					<p className="p-4 text-center">No Task Found! Try to add more Task.</p>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>
									<div className="flex gap-2 items-center">Title</div>
								</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Priority</TableHead>
								<TableHead className="text-right pr-14">Action</TableHead>
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
									<TableCell className="flex gap-4 items-center justify-end w-max-[50x]">
										<TableOptionButton id={id} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</div>
		</ScrollArea>
	);
}
