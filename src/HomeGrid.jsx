import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TestFromHomeCard from './TestFromHomeCard';
import CovidMapCard from './CovidMapCard';
import EmergencyCard from './EmergencyCard';
import SymptomsCard from './SymptomsCard';
import VaccineInfoCard from './VaccineInfoCard';
import VaccineAppointmentCard from './VaccineAppointmentCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TestFromHomeCard />
        </Grid>
        <Grid item xs={4}>
          <SymptomsCard />
        </Grid>
        <Grid item xs={4}>
          <EmergencyCard />
        </Grid>
        <Grid item xs={4}>
          <CovidMapCard />
        </Grid>
        <Grid item xs={4}>
          <VaccineInfoCard />
        </Grid>
        <Grid item xs={4}>
          <VaccineAppointmentCard />
        </Grid>
      </Grid>
    </div>
  );
}