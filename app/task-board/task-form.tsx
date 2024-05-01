import { Button } from '@/components/ui/button';
import { DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createTask } from '@/lib/action';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function TaskForm() {
	return (
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
	);
}
