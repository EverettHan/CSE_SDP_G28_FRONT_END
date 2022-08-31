
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

export default function VaccineAppointmentCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Vaccine Appointment"
          height="140"
          image="/static/images/cards/vaccineAppointment.jpg"
          title="Vaccine Appointment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Vaccine Appointment
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            If you believe you are positive for Covid-19, click here to schedule an appointment as soon as possible.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/VaccineAppointment">
        Vaccine Appointment
    </Link>
      </CardActions>
    </Card>
  );
}
