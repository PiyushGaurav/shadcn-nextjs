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

export default function PriorityFilterButton() {
	const router = useRouter();
	const s = useSearchParams();
	return (
		<Select
			onValueChange={value => {
				let query = 'priority=' + value;
				let status = s.get('status');
				if (status != null) {
					query += `&status=${status}`;
				}
				router.push(`/task-board?${query}`);
			}}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Priority" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Filter by Priority</SelectLabel>
					<SelectItem value="High">High</SelectItem>
					<SelectItem value="Medium">Medium</SelectItem>
					<SelectItem value="Low">Low</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

// 'use client';

// import * as React from 'react';
// import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import {
// 	DropdownMenu,
// 	DropdownMenuCheckboxItem,
// 	DropdownMenuContent,
// 	DropdownMenuLabel,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu';
// import { useEffect } from 'react';

// type Priority = {
// 	High: boolean;
// 	Medium: boolean;
// 	Low: boolean;
// };
// const FilterButton: React.FC = () => {
// 	const router = useRouter();
// 	const [priority, setPriority] = React.useState<Priority>({
// 		High: false,
// 		Medium: false,
// 		Low: false
// 	});
// 	const s = useSearchParams();

// 	useEffect(() => {
// 		let p = [];
// 		if (priority.High) p.push('High');
// 		if (priority.Medium) p.push('Medium');
// 		if (priority.Low) p.push('Low');
// 		let query = '';
// 		if (p.length > 0) {
// 			query = 'priority=' + p.toString();
// 		}
// 		let status = s.get('status');
// 		if (status != null) {
// 			query += `&status=${status}`;
// 		}
// 		router.push(`/task-board?${query}`);
// 	}, [router, priority]);

// 	const onSelect = (key: keyof Priority) => {
// 		setPriority({
// 			...priority,
// 			[key]: !priority[key]
// 		});
// 		console.log(priority);
// 	};

// 	return (
// 		<DropdownMenu>
// 			<DropdownMenuTrigger asChild>
// 				<Button variant="outline">Filter By</Button>
// 			</DropdownMenuTrigger>
// 			<DropdownMenuContent
// 				className="w-56"
// 				onChange={e => {
// 					console.log(e);
// 				}}
// 			>
// 				<DropdownMenuLabel>Priority</DropdownMenuLabel>
// 				<DropdownMenuSeparator />
// 				<DropdownMenuCheckboxItem checked={priority.High} onCheckedChange={() => onSelect('High')}>
// 					High
// 				</DropdownMenuCheckboxItem>
// 				<DropdownMenuCheckboxItem checked={priority.Medium} onCheckedChange={() => onSelect('Medium')}>
// 					Medium
// 				</DropdownMenuCheckboxItem>
// 				<DropdownMenuCheckboxItem checked={priority.Low} onCheckedChange={() => onSelect('Low')}>
// 					Low
// 				</DropdownMenuCheckboxItem>
// 			</DropdownMenuContent>
// 		</DropdownMenu>
// 	);
// };

// export default FilterButton;
