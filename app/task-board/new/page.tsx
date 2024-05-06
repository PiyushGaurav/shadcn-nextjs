import AddEditForm from '../../../components/custom/AddEditForm';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
export default function New() {
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<Breadcrumb className="py-10">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/task-board">Task Board</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink>New</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h1 className="text-7xl font-bold">Create Task</h1>
			<p>{"Add new task to to task board. Click save when you're done."}</p>
			<AddEditForm />
		</div>
	);
}
