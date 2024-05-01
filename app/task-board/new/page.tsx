'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createTask } from '@/lib/action';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import AddEditForm from '../add-edit-form';
import { usePathname } from 'next/navigation';

export default function New() {
	const pathname = usePathname();
	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<h1 className="text-7xl font-bold">Create Task</h1>
			<p>{"Add new task to to task board. Click save when you're done."}</p>
			<AddEditForm />
		</div>
	);
}
