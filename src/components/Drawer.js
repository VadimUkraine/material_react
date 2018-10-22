import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import '../App.css';

const styles = {
  list: {
    width: 250,
    padding: '10 0',
  },
  fullList: {
    width: 'auto',
  },
};

class AppDrawer extends React.Component {

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
      	<p className="list_item">Catalogue</p>
      	<p className="list_item">Add Good</p>
      </div>
    );
    return (
      <div>
        <Drawer 
	        open={this.props.open} 
	        onClose={()=> this.props.onToggle()}
        >
          <div
            tabIndex={0}
            role="button"
          >
            {sideList}
          </div>
        </Drawer>  
      </div>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);