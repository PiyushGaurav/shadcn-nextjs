import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NavBar from '@/components/custom/NavBar';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Task Board',
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
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
