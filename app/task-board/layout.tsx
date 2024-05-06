import React from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = props => {
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
			{props.children}
		</div>
	);
};

export default RootLayout;
