import AddEditForm from '../add-edit-form';

export default function New() {
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<h1 className="text-7xl font-bold">Create Task</h1>
			<p>{"Add new task to to task board. Click save when you're done."}</p>
			<AddEditForm />
		</div>
	);
}
