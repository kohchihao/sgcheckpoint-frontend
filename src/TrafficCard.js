import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 600
  },
  media: {
    height: 300
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});

class TrafficCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }
  render() {
    const { imageURL, name, dateTime } = this.props;
    const { classes } = this.props;

    return (
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imageURL}
            title="Contemplative Reptile"
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
  }
}

TrafficCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired
};
//make this component available to the app
export default withStyles(styles)(TrafficCard);
