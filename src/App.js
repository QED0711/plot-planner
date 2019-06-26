import React, { Component } from 'react';
import './App.css';

import GridTypeSelect from './components/GridTypeSelect'
import AddSubplotInterface from './components/AddSubplotInterface';
import Grid from './components/Grid';
import Subplot2GridInterface from './components/Subplot2GridInterface';



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
    
    this.setType = this.setType.bind(this)
    this.setAddSubplot = this.setAddSubplot.bind(this)
  }

  setType = (type) => {
    console.log("CALLED")
    this.setState({type})
  }

  setAddSubplot = (gridSize, selectedIndex) => {
    this.setState({addSubplot: {gridSize, selectedIndex}})
  }

  render(){

    return (
      <div className="App">
        <GridTypeSelect setType={this.setType} />
        {
          this.state.type === 'add_subplot' 
          &&
          <div>
            <AddSubplotInterface setAddSubplot={this.setAddSubplot} gridSpecs={this.state.addSubplot}/>
            <Grid gridSpecs={this.state.addSubplot}/>
          </div>
        }

        {
          this.state.type === "subplot2Grid"
          &&
          <div>
            <Subplot2GridInterface />
          </div>
        }

      </div>
    );    
  }
}

export default App;
