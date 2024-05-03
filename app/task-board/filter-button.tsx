// 'use client';
// import * as React from 'react';

// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectTrigger,
// 	SelectValue
// } from '@/components/ui/select';
// import { useRouter } from 'next/navigation';

// export function FilterButton() {
// 	const router = useRouter();
// 	return (
// 		<form>
// 			<Select
// 				onValueChange={value => {
// 					console.log('SELECTED', value);
// 					router.push(`/task-board?priority=${value}`);
// 				}}
// 			>
// 				<SelectTrigger className="w-[150px]">
// 					<SelectValue placeholder="Filter" />
// 				</SelectTrigger>
// 				<SelectContent>
// 					<SelectGroup>
// 						<SelectLabel>Priority</SelectLabel>
// 						<SelectItem value="High">High</SelectItem>
// 						<SelectItem value="Medium">Medium</SelectItem>
// 						<SelectItem value="Low">Low</SelectItem>
// 					</SelectGroup>
// 				</SelectContent>
// 			</Select>
// 		</form>
// 	);
// }

'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useEffect } from 'react';

type Priority = {
	High: boolean;
	Medium: boolean;
	Low: boolean;
};
const FilterButton: React.FC = () => {
	const router = useRouter();
	const [priority, setPriority] = React.useState<Priority>({
		High: false,
		Medium: false,
		Low: false
	});

	useEffect(() => {
		//do operation on state change
		router.push(`/task-board?priority=${JSON.stringify(priority)}`);
	}, [priority, router]);

	const onSelect = (key: keyof Priority) => {
		setPriority({
			...priority,
			[key]: !priority[key]
		});
		console.log(priority);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Filter By</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-56"
				onChange={e => {
					console.log(e);
				}}
			>
				<DropdownMenuLabel>Priority</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem checked={priority.High} onCheckedChange={() => onSelect('High')}>
					High
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={priority.Medium} onCheckedChange={() => onSelect('Medium')}>
					Medium
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={priority.Low} onCheckedChange={() => onSelect('Low')}>
					Low
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default FilterButton;
