import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import rp from 'request-promise';
import config from './config.json';
import TrafficCard from './TrafficCard';

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
  },
});

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTraffic: []
    };
  }

  componentDidMount() {
    this._fetchTrafficImages();
  }

  _fetchTrafficImages = () => {
    let options = {
      uri: config.uri + '/api/images',
      json: true // Automatically parses the JSON string in the response
    };

    rp(options).then(data => {
      this.setState({
        listTraffic: data
      });
    });
  };

  render() {
    const { classes } = this.props;

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
          {this.state.listTraffic.map((traffic, index) => (
            <TrafficCard
              key={index}
              imageURL={traffic.mImageURL}
              name={traffic.mName}
              dateTime={traffic.mCreateDate}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

//make this component available to the app
export default withStyles(styles)(Content);
