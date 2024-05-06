import TaskTable from '../../components/custom/TaskTable';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export default async function TaskBoard({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
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
			</div>
			<TaskTable searchParams={searchParams} />
		</div>
	);
}
