import React, { useEffect, useState } from 'react';
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
import createTask from '@/actions/createTask';
import updateTask from '@/actions/updateTask';
import { Task } from '@/types/task';

type ThisProp = {
	data?: Task | undefined;
};

const AddEditForm: React.FC<{ data: Task }> = (props: ThisProp) => {
	const isAddMode = !props.data;

	function onSubmit(formData: FormData) {
		const title: string = (formData.get('title') as string) || '';
		const status: string = (formData.get('status') as string) || 'Todo';
		const priority: string = (formData.get('priority') as string) || 'Low';
		console.log('AddEditForm onSubmit', { title, status, priority });
		if (!title) return;
		const data: Task = {
			id: crypto.randomUUID(),
			title,
			status,
			priority
		};
		const id: string | undefined = props.data?.id;
		return isAddMode ? createTask(data) : updateTask(id, data);
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
				<Link href="/task-board" legacyBehavior passHref>
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
