import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footerTitle: {
    margin: 0
  },
  footer: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

const Footer = ({ classes, name, facebook, instagram}) => {
  return (
    <footer className={classes.footer}>
      <h5 className={classes.footerTitle}>CRAFTED BY {name}</h5>
      <p className={classes.footerTitle}>DATA FROM WWW.MYTRANSPORT.SG</p>
      <a href={facebook}>
        <i className="fab fa-facebook-square" />
      </a>
      <a href={instagram}>
        <i className="fab fa-instagram" />
      </a>
    </footer>
  );
};

//make this component available to the app
export default withStyles(styles)(Footer);
