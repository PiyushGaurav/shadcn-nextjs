import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import TaskForm from './task-form';
import TaskTable from './task-table';

export default function TaskBoard() {
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
					<TaskForm />
				</DialogContent>
				<div className="border rounded-md my-4">
					<TaskTable />
				</div>
			</Dialog>
		</div>
	);
}
