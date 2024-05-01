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
import { createTask } from '@/lib/action';
import { revalidatePath } from 'next/cache';

type Task = {
	title: string | null;
	description: string | null;
};

export default async function TaskBoard() {
	const response = await fetch('http://localhost:3000/tasks');
	const tasks = await response.json();

	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<Dialog>
				<div className="flex w-full justify-between items-center">
					<h1 className="text-5xl font-bold">Task Board</h1>
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
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Input id="description" name="description" className="col-span-3" />
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
							<TableHead>Title</TableHead>
							<TableHead>Description</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{tasks.map(({ title, description }: Task) => (
							<TableRow key={title}>
								<TableCell>{title}</TableCell>
								<TableCell>{description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
