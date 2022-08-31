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

export default function EmergencyCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Emergency Card"
          height="140"
          image="/static/images/cards/emergencySigns.jpeg"
          title="Emergency Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Covid-19 Emergency
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          In case of an emergency, follow the steps here to receive help right away.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/Emergency">
        Emergency
    </Link>
      </CardActions>
    </Card>
  );
}
