'use client';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Ellipsis } from 'lucide-react';
import { useRouter } from 'next/navigation';
import deleteTask from '@/actions/deleteTask';
interface Props {
	id: string;
}

const TableOptionButton: React.FC<Props> = ({ id }) => {
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => {
						router.push(`/task-board/${id}`);
					}}
				>
					Edit
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => deleteTask(id)}>Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TableOptionButton;
