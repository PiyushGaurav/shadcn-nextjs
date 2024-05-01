'use client';
import AddEditForm from '../add-edit-form';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Task() {
	const [task, setTask] = useState(null);
	const pathname = usePathname();
	const params = useParams();

	useEffect(() => {
		async function fetchTask() {
			const response = await fetch(`http://localhost:3000/tasks/${params.slug}`);
			const task = await response.json();
			setTask(task);
		}
		fetchTask();
	}, [pathname, params.slug]);

	if (!task) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<h1 className="text-7xl font-bold">Edit Task</h1>
			<p>{"Update your task and click save when you're done."}</p>
			<AddEditForm data={task} />
		</div>
	);
}
