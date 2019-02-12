import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import config from './config.json';
import TrafficCard from './TrafficCard';

import { useFetch } from './hooks';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '-20px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Cabin, sans-serif',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-100px'
    }
  },
  container: {
    maxWidth: '600px'
  }
});

const Content = props => {
  const [data, loading, error] = useFetch(config.uri + '/api/images');

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={16}
        className={classes.container}
      >
        {loading ? null : error ? (
          <div>{error}</div>
        ) : (
          data.map((traffic, index) => (
            <TrafficCard
              key={index}
              imageURL={traffic.mImageURL}
              name={traffic.mName}
              dateTime={traffic.mCreateDate}
            />
          ))
        )}
      </Grid>
    </div>
  );
};

//make this component available to the app
export default withStyles(styles)(Content);
