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
import ThemeButton from './theme-button';
export default function NavBar() {
	return (
		<NavigationMenu className="flex justify-between max-w-full py-4 px-16 text-center border-b-2 border-inherit">
			<Link href="/" legacyBehavior passHref>
				<h1 className="font-bold text-xl">shadcn/ui</h1>
			</Link>
			<NavigationMenuList>
				<NavigationMenuItem className="ml-2">
					<Link href="/home" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="ml-2">
					<Link href="/task-board" legacyBehavior passHref>
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
