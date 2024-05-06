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
		<div className="flex flex-col ">
			<h1 className="text-7xl font-bold">Create Task</h1>
			<p>{"Add new task to to task board. Click save when you're done."}</p>
			<AddEditForm />
		</div>
	);
}
