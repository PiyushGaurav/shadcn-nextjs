import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import Link from 'next/link';
import { Task } from '@/types/task';
import createTask from '@/actions/createTask';
import updateTask from '@/actions/updateTask';

type ThisProp = {
	data?: Task | null | undefined;
};

const AddEditForm: React.FC<ThisProp> = props => {
	const isAddMode = !props.data;

	async function onSubmit(formData: FormData) {
		'use server';
		return isAddMode ? createTask(formData) : updateTask(props.data?.id, formData);
	}

	return (
		<form action={onSubmit} className="grid gap-4 py-10">
			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="title">Title</Label>
				<Input id="title" name="title" defaultValue={props.data?.title} className="col-span-3" />
			</div>
			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="status">Status</Label>
				<Select name="status" defaultValue={props.data?.status}>
					<SelectTrigger className="col-span-3">
						<SelectValue placeholder="Select Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Status</SelectLabel>
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
				<Select name="priority" defaultValue={props.data?.priority}>
					<SelectTrigger className="col-span-3">
						<SelectValue placeholder="Select Priority" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Priority</SelectLabel>
							<SelectItem value="Low">Low</SelectItem>
							<SelectItem value="Medium">Medium</SelectItem>
							<SelectItem value="High">High</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<div className="flex w-full justify-end gap-4">
				<Link href=".." legacyBehavior passHref>
					<Button type="submit" variant="secondary">
						Cancel
					</Button>
				</Link>
				<Button type="submit">Save</Button>
			</div>
		</form>
	);
};

export default React.memo(AddEditForm);
