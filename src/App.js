import React, { Component } from 'react';
import './App.css';
import Interface from './components/Interface';
import Grid from './components/Grid';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gridSize: [1, 1],
      selectedIndex: 1
    }
    this.setGrid = this.setGrid.bind(this)
  }

  setGrid = (gridSize, selectedIndex) => {
    this.setState({gridSize, selectedIndex})
  }

  render(){

    

    return (
      <div className="App">
          <Interface setGrid={this.setGrid} gridSpecs={this.state}/>
          <Grid gridSpecs={this.state}/>
      </div>
    );    
  }
}

export default App;
