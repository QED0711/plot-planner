import React, { Component } from 'react';
import './App.css';
import AddSubplotInterface from './components/AddSubplotInterface';
import Grid from './components/Grid';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      type: "add_subplot",

      addSubplot: {
        gridSize: [1, 1],
        selectedIndex: 1
      },

      subplot2Grid: {
        gridSize: [1, 1,],
        selectedSize: [0,0],
        rowspan: 1,
        colspan: 1
      }
    }
    this.setAddSubplot = this.setAddSubplot.bind(this)
  }

  setAddSubplot = (gridSize, selectedIndex) => {
    this.setState({addSubplot: {gridSize, selectedIndex}})
  }

  render(){

    

    return (
      <div className="App">
          <AddSubplotInterface setAddSubplot={this.setAddSubplot} gridSpecs={this.state.addSubplot}/>

          <Grid gridSpecs={this.state.addSubplot}/>
      </div>
    );    
  }
}

export default App;
