import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import HeaderPage from '../components/HeaderPage';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Rick and Morty App',
	description: 'App consulta Rick and Morty',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<HeaderPage />
				{children}
			</body>
		</html>
	);
}
