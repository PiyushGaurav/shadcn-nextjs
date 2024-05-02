'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import deleteTask from '@/actions/deleteTask';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog';
interface Props {
	id: string;
}

const TableOptionButton: React.FC<Props> = ({ id }) => {
	const router = useRouter();

	return (
		<AlertDialog>
			<div className="flex gap-1">
				<Button
					variant="outline"
					size="icon"
					onClick={() => {
						router.push(`/task-board/${id}`);
					}}
				>
					<Pencil className="h-4 w-4" />
				</Button>
				<AlertDialogTrigger>
					<Button variant="outline" size="icon">
						<Trash2 className="h-4 w-4" />
					</Button>
				</AlertDialogTrigger>
			</div>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your account and remove your data from our
						servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={() => deleteTask(id)}>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default TableOptionButton;
