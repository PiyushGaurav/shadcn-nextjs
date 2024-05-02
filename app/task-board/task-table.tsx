import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUp, ArrowDown, ArrowRight, Circle, CircleCheck, CircleHelp, CircleX, Timer } from 'lucide-react';
import TableOptionButton from '@/app/task-board/table-option-button';
import { Task } from '@/types/task';

export default async function TaskTable() {
	const response = await fetch('http://localhost:3000/tasks');
	const tasks = await response.json();

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
		<Table className="overflow-hidden">
			<TableHeader>
				<TableRow>
					<TableHead>
						<div className="flex gap-2 items-center">
							<Checkbox id="terms" />
							Title
						</div>
					</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Priority</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tasks.map(({ id, title, status, priority }: Task) => (
					<TableRow key={title}>
						<TableCell>
							<div className="flex gap-2 items-center">
								<Checkbox id="task" />
								{title}
							</div>
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
						<TableCell className="max-w-[20px] items-center">
							<TableOptionButton id={id} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
