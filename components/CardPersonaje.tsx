import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
	Avatar,
	IconButton,
	CardActions,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
export default function CardPersonaje({ personaje }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={<Avatar aria-label="recipe">R</Avatar>}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={personaje.name}
				subheader="September 14, 2016"
			/>
			<CardMedia
				component="img"
				height="194"
				image={personaje.image}
				alt="Paella dish"
			/>
			<CardContent>
				<Typography
					variant="body2"
					color="text.secondary"
				>
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
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
	);
}
