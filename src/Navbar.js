import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import config from './config.json';

import { useFetch } from './hooks';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#ff9800',
    height: '220px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Cabin, sans-serif'
  },
  container: {
    paddingTop: '30px',
    maxWidth: '600px',
    paddingLeft: '20px',
    paddingRight: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  },
  paperLeft: {
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  paperLeftTitle: {
    margin: 0,
    fontSize: '24px',
    color: '#ffffff'
  },
  paperLeftName: {
    margin: 0,
    fontSize: '12px',
    color: '#ffffff'
  },
  paperRight: {
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
});

const Navbar = ({ classes }) => {
  const [data, loading] = useFetch(config.uri + '/rates');

  return (
    <div className={classes.root}>
      <Grid container spacing={16} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <div className={classes.paperLeft}>
            <h3 className={classes.paperLeftTitle}>SGCheckpoint</h3>
            <h6 className={classes.paperLeftName}>by Marcus.K</h6>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div className={classes.paperRight}>
            {loading ? null : (
              <>
                <h6 className={classes.paperLeftName}>{data.date}</h6>
                <h3 className={classes.paperLeftTitle}>
                  SGD 1 → RM{data.rates.MYR}
                </h3>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

//make this component available to the app
export default withStyles(styles)(Navbar);
