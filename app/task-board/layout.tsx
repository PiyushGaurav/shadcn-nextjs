'use client';
import React from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = props => {
	const paths = usePathname();
	const pathNames = paths.split('/').filter(path => path);
	const pathItems = pathNames.map((path, i) => ({
		name: path,
		path: pathNames.slice(0, i + 1).join('/')
	}));

	return (
		<div className="flex flex-col m-4 max-w-screen-xl px-4 mx-auto">
			<Breadcrumb className="py-10">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					{pathItems.map((item, index) => {
						let name = item.name.replace('-', ' ');
						name = name.replace(/(?:^|\s)\S/g, function (a) {
							return a.toUpperCase();
						});

						if (index == pathItems.length - 1) {
							return (
								<>
									<BreadcrumbSeparator />
									<BreadcrumbItem>
										<BreadcrumbPage>{name}</BreadcrumbPage>
									</BreadcrumbItem>
								</>
							);
						}
						return (
							<>
								<BreadcrumbSeparator />
								<BreadcrumbItem key={item.path}>
									<BreadcrumbLink href={`/${item.path}`}>{name}</BreadcrumbLink>
								</BreadcrumbItem>
							</>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
			{props.children}
		</div>
	);
};

export default RootLayout;
