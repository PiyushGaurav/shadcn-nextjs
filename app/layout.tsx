import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NavBar from '@/components/custom/nav-bar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shadcn Tutorial',
	description: 'Created by Piyush'
};

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = props => {
	return (
		<html lang="en">
			<body className={cn('min-h-screen w-full bg-background', inter.className)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<NavBar />
					{props.children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
