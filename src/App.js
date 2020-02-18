import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
// import './App.css';
import Formula from './Formula/Formula';
// import InputError from './InputError/InputError'
import Introduction from './Introduction/Introduction';
import Card from './Cards/Cards';
import WeightDecrease from './Cards/WeightDecrease';
import WeightIncrease from './Cards/WeightIncrease';
import Graph from './Graph/Graph';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormLabel from '@material-ui/core/FormLabel';
// import InputLabel from '@material-ui/core/InputLabel';
// import { makeStyles } from '@material-ui/core/styles';
import UserForm from './UserForm/UserForm';
// import Consumer from './UserForm/UserForm';
// import useContext from 'react';
// import {MyContext} from './UserForm/UserForm'
import 'typeface-roboto';



class App extends Component {
  state =  {
    
  };

  render() {
    return (
      <div className="App container col-xs-12 col-md-8 col-lg-6 py-5 text-center justify-content-center">
        <Introduction />
        <UserForm />
      
      {/* <MyContext.Consumer> */}
        <Formula  />
     
        
      {/* </MyContext.Consumer> */}
      {/* {this.state.displayFormula ?
        <Formula 
        // gender={this.state.gender}
        // age={this.state.age}
        // weight={this.state.weight}
        // height={this.state.height}
        // activity={this.state.activity}
        display={this.state.displayFormula}
        calories={this.state.calories}
        /> : null } */}
        
      {this.state.displayFormula ?
        <Card
        handleCutButton={this.cutButtonHandler}
        handleBulkButton={this.bulkButtonHandler}
        />
      : null }
      {this.state.displayCut ? 
        <WeightDecrease 
        calories={this.state.calories}
        handleClassic={this.cutButtonHandler}
        handleLowCarb={this.lowCarbHandler}
        handleHighCarb={this.highCarbHandler}
        />
      : null } 
      {this.state.displayBulk ? 
        <WeightIncrease 
        calories={this.state.calories}
        handleClassic={this.bulkButtonHandler}
        handleLowCarb={this.lowCarbHandler}
        handleHighCarb={this.highCarbHandler}
        />
      : null }
     {this.state.displayGraph ?
      <Graph  
        carbohydrates={parseInt((this.state.calories + this.state.modifier) * this.state.carbModifier / 4)}
        fat={parseInt((this.state.calories + this.state.modifier) * this.state.fatModifier / 9)}
        protein={parseInt((this.state.calories + this.state.modifier) * this.state.proteinModifier / 4)}
        calories={this.state.calories + this.state.modifier}
      />
      : null }
    </div>
  )};
}

export default App;
