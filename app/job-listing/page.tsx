import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function JobListing() {
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<div className="flex flex-col w-full justify-between items-center">
				<p>Coming soon..</p>
				<h1 className="text-7xl font-bold my-10">Job Listing</h1>
				<div className="flex gap-4">
					<Link href="/task-board" legacyBehavior passHref>
						<Button variant="outline">View Tasks</Button>
					</Link>
					<Link href="/task-board/new" legacyBehavior passHref>
						<Button>Add Task</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
