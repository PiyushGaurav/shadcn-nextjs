'use client';
import * as React from 'react';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';

export function StatusFilterButton() {
	const router = useRouter();
	const p = useSearchParams();

	return (
		<Select
			onValueChange={value => {
				let priority = p.get('priority');
				let query = `status=${value}`;
				if (priority != null) {
					query += `&priority=${priority}`;
				}
				console.log('current :', priority, query);
				router.push(`/task-board?${query}`);
			}}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Status" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Filter by Status</SelectLabel>
					<SelectItem value="Backlog">Backlog</SelectItem>
					<SelectItem value="Done">Done</SelectItem>
					<SelectItem value="Todo">Todo</SelectItem>
					<SelectItem value="In Progress">In Progress</SelectItem>
					<SelectItem value="Canceled">Canceled</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
