import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Img from 'react-image';
import PulseLoader from 'react-spinners/PulseLoader';

import camera from './camera_down.png';

const styles = theme => ({
  card: {
    maxWidth: 600
  },
  media: {
    height: 300,
    width: '100%'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});

const TrafficCard = props => {
  const { imageURL, name, dateTime } = props;
  const { classes } = props;

  return (
    <Grid item>
      <Card className={classes.card}>
        <Img
          src={[imageURL, camera]}
          loader={<PulseLoader sizeUnit={'px'} size={7} color={'#000'} />}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body2">{dateTime}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

TrafficCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired
};
//make this component available to the app
export default withStyles(styles)(TrafficCard);
