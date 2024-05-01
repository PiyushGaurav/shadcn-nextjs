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
import { useRouter } from 'next/navigation';

export default function TableOptionButton({ id }: { id: string }) {
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => router.push('/task-board/new')}>Edit</DropdownMenuItem>
				<DropdownMenuItem onClick={() => deleteTask(id)}>Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
