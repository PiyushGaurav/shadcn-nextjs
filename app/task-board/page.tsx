import { Button } from '@/components/ui/button';
import TaskTable from './task-table';
import Link from 'next/link';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export default function TaskBoard() {
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<Breadcrumb className="py-10">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink>Task Board</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
				</BreadcrumbList>
			</Breadcrumb>

			<div className="flex w-full justify-between items-center">
				<h1 className="text-7xl font-bold">Task Board</h1>
				<Link href="/task-board/new" legacyBehavior passHref>
					<Button variant="outline">Add Task</Button>
				</Link>
			</div>
			<div className="border rounded-md my-4">
				<TaskTable />
			</div>
		</div>
	);
}
