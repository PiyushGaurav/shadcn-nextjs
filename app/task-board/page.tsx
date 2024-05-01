import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { createTask, deleteTask } from '@/lib/action';
import { revalidatePath } from 'next/cache';
import { Checkbox } from '@/components/ui/checkbox';
import {
	ArrowUp,
	ArrowDown,
	ArrowRight,
	Circle,
	CircleCheck,
	CircleHelp,
	CircleX,
	Timer,
	Ellipsis
} from 'lucide-react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import TableOptionButton from '@/components/custom/table-option-button';

type Task = {
	title: string | null;
	description: string | null;
	status: string | null;
	priority: number | null;
};

export default async function TaskBoard() {
	const response = await fetch('http://localhost:3000/tasks');
	const tasks = await response.json();

	const renderStatusIcon = (status: string) => {
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

	const renderPriorityIcon = (priority: string) => {
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
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<Dialog>
				<div className="flex w-full justify-between items-center">
					<h1 className="text-7xl font-bold">Task Board</h1>
					<DialogTrigger asChild>
						<Button variant="outline">Add Task</Button>
					</DialogTrigger>
				</div>

				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add Task</DialogTitle>
						<DialogDescription>Add new task to to task board. Click save when you're done.</DialogDescription>
					</DialogHeader>
					<form action={createTask} className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="title" className="text-right">
								Title
							</Label>
							<Input id="title" name="title" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="status" className="text-right">
								Status
							</Label>
							<Select name="status">
								<SelectTrigger className="col-span-3">
									<SelectValue placeholder="Select Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="Canceled">Canceled</SelectItem>
										<SelectItem value="Todo">Todo</SelectItem>
										<SelectItem value="In Progress">In Progress</SelectItem>
										<SelectItem value="Backlog">Backlog</SelectItem>
										<SelectItem value="Done">Done</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="priority" className="text-right">
								Priority
							</Label>
							<Select name="priority">
								<SelectTrigger className="col-span-3">
									<SelectValue placeholder="Select Priority" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="Low">Low</SelectItem>
										<SelectItem value="Medium">Medium</SelectItem>
										<SelectItem value="High">High</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button type="submit">Save</Button>
							</DialogClose>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
			<div className="border rounded-md my-4">
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
						</TableRow>
					</TableHeader>
					<TableBody>
						{tasks.map(({ id, title, description, status, priority }: Task) => (
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
			</div>
		</div>
	);
}
