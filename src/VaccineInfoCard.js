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

export default function VaccineInfoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Vaccine Info"
          height="140"
          image="/static/images/cards/vaccineInformation.jpg"
          title="Vaccine Info"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Vaccine Information
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            More informaton on the Covid-19 vaccine is provided here by the CDC.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/VaccineInfo">
        Vaccine Info
    </Link>
      </CardActions>
    </Card>
  );
}
