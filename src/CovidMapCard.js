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

export default function CovidMapCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Covid Map Card"
          height="140"
          image="/static/images/cards/covidMap.png"
          title="Covid Map Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Covid-19 Case Map
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An interactive map is provided for further information on the prevalence of Covid-19 by county in the United States.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/CovidMap">
        Covid-19 Case Map
    </Link>
      </CardActions>
    </Card>
  );
}
