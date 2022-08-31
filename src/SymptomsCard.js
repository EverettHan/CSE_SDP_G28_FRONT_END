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
          alt="Symptoms Card"
          height="140"
          image="/static/images/cards/symptoms.jpg"
          title="Symptoms Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Symptoms of Covid-19
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Covid-19 can have a variety of symptoms such as coughing, fevers, or shortness of breath. Click here to learn more
            about the symptoms of Covid-19.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/Symptoms">
          Check Symptoms
    </Link>
      </CardActions>
    </Card>
  );
}
