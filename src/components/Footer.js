import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class AppFooter extends Component {
  
  render(){
  const { classes } = this.props;
  const calculate = this.props.collect;
  let goods = 0;
  let priceSum = 0;
  for (var b=0; b<calculate.length; b++){
    goods += calculate[b].qnt;
    priceSum += calculate[b].price;
  }
  priceSum = priceSum.toFixed(2);
  let average = (priceSum/calculate.length).toFixed(2);
  if(average === 'NaN'){
    average = 0.00;
    average = average.toFixed(2);
  }
  return (
    <footer>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          General information
        </Typography>
        <Typography component="p">
          Total amount of goods: <span style={{color:'blue'}}>{goods}</span>
        </Typography>
        <Typography component="p">
          The sum of the prices of all goods:  <span style={{color:'blue'}}>{priceSum}</span>
        </Typography>
        <Typography component="p">
          Average price:  <span style={{color:'blue'}}>{average}</span>
        </Typography>
      </Paper>
    </footer>
  );
}
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);

