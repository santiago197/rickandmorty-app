import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
	Avatar,
	IconButton,
	CardActions,
	Container,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function CharacterPage({ params }) {
	const { id } = params;
	return (
		<Container>
			<h1>Este es elcapitulo {id}</h1>
			<Card sx={{ maxWidth: 345 }}>
				<CardHeader
					avatar={<Avatar aria-label="recipe">R</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Shrimp and Chorizo Paella"
					subheader="September 14, 2016"
				/>
				<CardMedia
					component="img"
					height="194"
					image="/static/images/cards/paella.jpg"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography
						variant="body2"
						color="text.secondary"
					>
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);
}
