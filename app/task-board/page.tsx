import TaskTable from '../../components/custom/TaskTable';

export default async function TaskBoard({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
	return (
		<>
			<div className="flex w-full justify-between items-center">
				<h1 className="text-7xl font-bold">Task Board</h1>
			</div>
			<TaskTable searchParams={searchParams} />
		</>
	);
}
