import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function TestFromHomeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Test Card"
          height="140"
          image="/static/images/cards/test card.jpg"
          title="Test Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Run a Test
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            If you have an image of a lung scan, we can give you a diagnosis immediately using our machine learning model.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/Run Test">
          Run Test
    </Link>
      </CardActions>
    </Card>
  );
}
