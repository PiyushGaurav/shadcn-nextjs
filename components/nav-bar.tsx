'use client';
import React from 'react';
import Link from 'next/link';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import ThemeButton from './ui/theme-button';
export default function NavBar() {
	return (
		<NavigationMenu className="flex justify-between max-w-full p-4 text-center px-4 border-b-2 border-inherit">
			<h1>Shadcn</h1>
			<NavigationMenuList>
				<NavigationMenuItem className="ml-2">
					<Link href="/docs" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Job Listing</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="ml-2">
					<Link href="/docs" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Task Board</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="ml-4">
					<ThemeButton />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
