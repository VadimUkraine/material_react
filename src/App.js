import React, { Component } from 'react';
import  AppHeader  from './components/Header';
import  AppDrawer  from './components/Drawer';
import  AppListGoods  from './components/List';
import './App.css';


class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      isDrawerOpen: false,
    }
  }

  render() {

    return (
      <div>
        <AppHeader
          onLeftIconClick={() =>this.setState({isDrawerOpen: true})}
         />
        <AppDrawer
          open={this.state.isDrawerOpen}
          onToggle={()=> this.setState({isDrawerOpen: false})}
        />
        <AppListGoods/>
      </div>
    );
  }
}

export default App;