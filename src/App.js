import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Formula from './Formula/Formula';
import InputError from './InputError/InputError'
import Introduction from './Introduction/Introduction';
import Card from './Cards/Cards';
import WeightDecrease from './Cards/WeightDecrease';
import WeightIncrease from './Cards/WeightIncrease';
// import { thisExpression } from '@babel/types';
import Graph from './Graph/Graph';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';




class App extends Component {
  state =  {
    Gender: '',
    GenderError: false,
    GenderErrors: true,
    Age: '',
    AgeError: false,
    AgeErrors: true,
    Weight: '',
    WeightError: false,
    WeightErrors: true,
    Height: '',
    HeightError: false,
    HeightErrors: true,
    Activity: '1.375',
    DisplayFormula: false,
    DisplayCut: false,
    DisplayBulk: false,
    DisplayGraph: false,
    DisplayError: false,
    Calories: '',
    Modifier: '',
    CarbModifier: '0.4',
    FatModifier: '0.4',
    ProteinModifier: '0.2',
    IsButtonActive: false,
  };


  //Handle input changes and turn errors to true if any occur.
  handleGenderChange = (event) => {
    this.validationHandler();
    const gender = event.target.value;
    if(gender === '') {
      this.setState({
        Gender: gender,
        GenderError: true,
        DisplayFormula: false,
        GenderErrors: true,
      });
    } else {
        this.setState({
          Gender: gender,
          GenderError: false,
      });
    }; 
  };

  handleAgeChange = (event) => {
    this.validationHandler();
    const age = event.target.value;
    if(age < 18 || age > 100) {
      this.setState({
        Age: age,
        AgeError: true,
        DisplayFormula: false,
      });
    } else {
        this.setState({
          AgeError: false,
          Age: age,
    });
    };
  };

  handleWeightChange = (event) => {
    this.validationHandler();
    const weight = event.target.value;
    if(weight < 40 || weight > 200) {
      this.setState({
        Weight: weight,
        WeightError: true,
        DisplayFormula: false,
      });
    } else {
        this.setState({
         Weight: weight,
         WeightError: false,
      });
      };
  };

  handleHeightChange = (event) => {
    this.validationHandler();
    const height = event.target.value;
    if(height < 125 || height > 230) {
      this.setState({
        Height: height,
        HeightError: true,
        DisplayFormula: false,
      });
    } else {
        this.setState({
         Height: height,
         HeightError: false,
      });
      };
  };

  //No error detection since activity is defined to 1.375 by default
  handleActivityChange = (event) => {
    this.setState({
      Activity: event.target.value,
    });
  };

  //Check if gender is male or female and adjust caloric level, triggered with 'Calculate!' button
  adjustCalories = () => {
    let adjustedCalories = this.state.Gender === "Male" ? parseInt(((10 * this.state.Weight) + (6.25 * this.state.Height) - (5 * this.state.Age) + 5) * this.state.Activity) : parseInt(((10 * this.state.Weight) + (6.25 * this.state.Height) - (5 * this.state.Age) - 161) * this.state.Activity);

    this.setState({
     Calories : adjustedCalories,
  });
  };

  validationHandler = () => {

    const { Gender, Age, Weight, Height } = this.state;
  
    //Check for blank fields
    

    if (!Age) {
     this.setState({ DisplayFormula: false, AgeErrors: true });
    } else { this.setState({  AgeErrors: false, DisplayError: false  })};

    if (!Weight) {
     this.setState({ DisplayFormula: false, WeightErrors: true });
    } else { this.setState({  WeightErrors: false, DisplayError: false  })};

    if(!Height) {
     this.setState({ DisplayFormula: false, HeightErrors: true });
    } else { this.setState({  HeightErrors: false, DisplayError: false  })};

    if (Gender === '') {
      this.setState({ DisplayFormula: false, GenderErrors: true });
    } else { this.setState({  GenderErrors: false, DisplayError: false })};
  };

  //Adjusting calories & Validating on 'Calculate' click.
  buttonClickHandler = () => {
    this.validationHandler();
    this.adjustCalories();

    if(!this.state.AgeErrors && !this.state.AgeError && !this.state.WeightError && !this.state.WeightErrors && !this.state.HeightError && !this.state.HeightErrors && !this.state.GenderErrors) {
      this.setState({ 
        DisplayFormula: true,
        DisplayCut: false,
        DisplayBulk: false,
        DisplayGraph: false,
      });
  } else {
    this.setState({ 
      DisplayError: true,
      DisplayFormula: false,
      DisplayCut: false,
      DisplayBulk: false,
      DisplayGraph: false,
    })
  };

    const ButtonName = document.getElementById('Calc-Btn');

    if(ButtonName.firstChild.data === 'Go back!') {
      ButtonName.firstChild.data = 'Calculate!'
    } else { ButtonName.firstChild.data = 'Calculate!' };
  };


  cutButtonHandler = () => {
    this.setState({
      DisplayFormula: false,
      DisplayCut: true,
      DisplayGraph: true,
      Modifier: -350,
      CarbModifier: '0.4',
      FatModifier: '0.4',
      ProteinModifier: '0.2'
    });
    document.getElementById('Calc-Btn').firstChild.data = 'Go back!';
  };

  bulkButtonHandler = () => {
    this.setState({
      DisplayFormula: false,
      DisplayBulk: true,
      DisplayGraph: true,
      Modifier: 350,
      CarbModifier: '0.4',
      FatModifier: '0.4',
      ProteinModifier: '0.2'
    })
    document.getElementById('Calc-Btn').firstChild.data = 'Go back!';
  };

  lowCarbHandler = () => {
    this.setState({
      CarbModifier: '0.25',
      FatModifier: '0.5',
      ProteinModifier: '0.25',
      DisplayGraph: true,
    });
  };

  highCarbHandler = () => {
    this.setState({
      CarbModifier: '0.5',
      FatModifier: '0.25',
      ProteinModifier: '0.25'
    })
  };


  render() {
    return (
    <div className="App container col-xs-12 col-md-8 col-lg-6 py-5 justify-content-center">
      <Introduction />
      <FormControl className="col-6">
        {/* <FormLabel component="legend">Gender</FormLabel> */}
        <RadioGroup row className="justify-content-center" aria-label="gender" name="gender" onChange={this.handleGenderChange} >
          <FormControlLabel
            control={<Radio color="primary"/>} 
            value="Male"
            onChange={this.handleGenderChange}
            id="male-check"
            label="Male"
            />
          <FormControlLabel
            control={<Radio color="primary"/>} 
            value="Female" 
            onChange={this.handleGenderChange}
            id="female-check"
            label="Female"
            /> 
          </RadioGroup>
        </FormControl>
        
        <div className="form-group row justify-content-center">
          {/* <InputLabel htmlFor="age" className="col-2 col-form-label">Age:</InputLabel>  */}
          <TextField 
            type="number" 
            // name="age"
            label="Age"
            onChange={this.handleAgeChange}
            error={this.state.AgeError}
            helperText={this.state.AgeError ? 'Age must be between 18 and 100 years' : ''}
            className="form-control col-4 my-2"
            id="Age"
            placeholder="(years)"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="form-group row justify-content-center">
          {/* <InputLabel htmlFor="weight" className="col-2 col-form-label">Weight:</InputLabel> */}
          <TextField 
            type="number" 
            // name="weight" 
            label="Weight"
            onChange={this.handleWeightChange}
            error={this.state.WeightError}
            helperText={this.state.WeightError ? 'Weight must be between 40 and 200 kgs.' : ''}
            className="form-control col-4 my-2"
            id="weight"
            placeholder="(kg)"
            variant="outlined"
            size="small"
          /> 
        </div>
        <div className="form-group row justify-content-center">
          {/* <InputLabel htmlFor="height" className="col-2 col-form-label">Height:</InputLabel> */}
          <TextField 
            type="number" 
            // name="height" 
            label="Height"
            onChange={this.handleHeightChange}
            error={this.state.HeightError}
            helperText={this.state.HeightError ? 'Height must be between 125 and 230 cm.' : ''}
            className="form-control col-4 my-2"
            id="height"
            placeholder="(cm)"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="form-group row justify-content-center">
          {/* <InputLabel htmlFor="activity" className="col-2 col-form-label">Activity:</InputLabel>  */}
          {/* Activity values are basically RMR multipliers, used later on in the Formula */}
          <FormControl variant="outlined" className="col-4 py-2" size="small">
          {/* <InputLabel id="activity" className="col-4"> */}
            <Select
              labelId="activity"
              // id="activity"
              value={this.state.Activity}
              onChange={this.handleActivityChange}   
            >
              <MenuItem
                value={1.2}>
                Sedentary lifestyle
              </MenuItem>
              <MenuItem 
                value={1.375}
                >Light excercise, 1-2 times per week
              </MenuItem>
              <MenuItem
                value={1.550}>
                Moderate excercise, 3-5 times per week
              </MenuItem>
              <MenuItem
                value={1.725}>
                Hard excercise, 6-7 times per week
              </MenuItem>
              <MenuItem
                value={1.9}>
                Athlete, two times per day
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      
        <div className="py-2">
          <button  
            className="btn btn-primary"
            onClick={this.buttonClickHandler}
            id="Calc-Btn">
              Calculate!
          </button>
        </div>
      {this.state.DisplayError? 
        <InputError 
        /> : null
      }
      
      {this.state.DisplayFormula ?
        <Formula 
        gender={this.state.Gender}
        age={this.state.Age}
        weight={this.state.Weight}
        height={this.state.Height}
        activity={this.state.Activity}
        display={this.state.DisplayFormula}
        calories={this.state.Calories}
      /> : null
      }
      {this.state.DisplayFormula ?
        <Card
        handleCutButton={this.cutButtonHandler}
        handleBulkButton={this.bulkButtonHandler}
        />
      : null }
      {this.state.DisplayCut ? 
        <WeightDecrease 
        calories={this.state.Calories}
        handleClassic={this.cutButtonHandler}
        handleLowCarb={this.lowCarbHandler}
        handleHighCarb={this.highCarbHandler}
        />
      : null } 
      {this.state.DisplayBulk ? 
        <WeightIncrease 
        calories={this.state.Calories}
        handleClassic={this.bulkButtonHandler}
        handleLowCarb={this.lowCarbHandler}
        handleHighCarb={this.highCarbHandler}
        />
      : null }
      {/* {this.state.DisplayGraph ?
        <CanvasJSChart options={graphProperties} 
        />
      : null } */}
     {this.state.DisplayGraph ?
      <Graph  
        carbohydrates={parseInt((this.state.Calories + this.state.Modifier) * this.state.CarbModifier / 4)}
        fat={parseInt((this.state.Calories + this.state.Modifier) * this.state.FatModifier / 9)}
        protein={parseInt((this.state.Calories + this.state.Modifier) * this.state.ProteinModifier / 4)}
        calories={this.state.Calories + this.state.Modifier}
      />
    : null }
    </div>
  )};
}

export default App;
