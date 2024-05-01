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
import { deleteTask } from '@/lib/action';
import { DialogTrigger } from '@/components/ui/dialog';

export default function TableOptionButton({ id }: { id: string }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem>
					<DialogTrigger asChild>
						<button>Edit</button>
					</DialogTrigger>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => deleteTask(id)}>Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
