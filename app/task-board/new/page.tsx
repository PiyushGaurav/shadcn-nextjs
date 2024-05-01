import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createTask } from '@/lib/action';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function New() {
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<h1 className="text-7xl font-bold">Create Task</h1>
			<p>Add new task to to task board. Click save when you're done.</p>
			<form action={createTask} className="grid gap-4 py-10">
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="title">Title</Label>
					<Input id="title" name="title" className="col-span-3" />
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="status">Status</Label>
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
					<Label htmlFor="priority">Priority</Label>
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

				<div className="flex w-full justify-end gap-4">
					<Link href="/task-board" legacyBehavior passHref>
						<Button type="submit" variant="secondary">
							Cancel
						</Button>
					</Link>
					<Button type="submit">Save</Button>
				</div>
			</form>
		</div>
	);
}
