import React, { Component } from 'react';
import '../App.css';
import  {listGoods} from '../constans';
import  AppSingleGood  from './SingleGood';
import  AppFooter  from './Footer';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class AppListGoods extends Component {
  constructor(){
    super()

    this.state = {
      goods: listGoods
    }

    this.deleteGood = this.deleteGood.bind(this);
    this.deleteAllGoods = this.deleteAllGoods.bind(this);

  }

  deleteGood(item){
    this.setState({
      goods: this.state.goods.filter(list => list.id !== item)
    });
  }

  deleteAllGoods(){
    this.setState({goods: []});
  }

  render() {
    const { classes } = this.props;
    return (
      <main className="goods_wrap">     
        <div className="list_wrap">
  	    {this.state.goods.map((good) => (
              <AppSingleGood
                  key={good.id}
                  id={good.id}
                  name={good.name}
                  descr={good.descr}
                  imagegood={good.image}
                  onDelete={this.deleteGood}
              />
          ))}
        </div>
        <p className="btn-wrap">
          <Button variant="contained" color="secondary" className={classes.button} onClick={this.deleteAllGoods}>
              Delete all goods
          </Button>
        </p>
        <AppFooter collect={this.state.goods}/>
      </main>
    );
  }
}


 AppListGoods.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)( AppListGoods);
