import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const links = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'About',
		route: '/about',
	},
	{
		label: 'Capitulos',
		route: '/character',
	},
];

export default function HeaderPage() {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					style={{ flexGrow: 1 }}
				>
					Rick & Morty
				</Typography>
				{links.map((link, index) => (
					<Button
						key={index}
						color="inherit"
					>
						<Link href={link.route}>{link.label}</Link>
					</Button>
				))}
			</Toolbar>
		</AppBar>
	);
}
