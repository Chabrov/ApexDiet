import React, { Component, createContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const MyContext = createContext();

class UserForm extends Component {
  state = {
    gender: '',
    genderError: false,
    genderErrors: true,
    age: '',
    ageError: false,
    ageErrors: true,
    weight: '',
    weightError: false,
    weightErrors: true,
    height: '',
    heightError: false,
    heightErrors: true,
    activity: '1.375',
    displayFormula: false,
    displayCut: false,
    displayBulk: false,
    displayGraph: false,
    displayError: false,
    calories: '',
    modifier: '',
    carbModifier: '0.4',
    fatModifier: '0.4',
    proteinModifier: '0.2',
    isCalculated: false,
  }

  //Handle input changes and turn errors to true if any occur.
  handleGenderChange = (event) => {
    const gender = event.target.value;
        this.setState({
          gender: gender,
          genderError: false,
          genderErrors: false,
      });
  };

  handleAgeChange = (event) => {
    const age = event.target.value;
    if(age < 18 || age > 100) {
      this.setState({
        age: age,
        ageErrors: true,
      });
    } else {
        this.setState({
          ageError: false,
          ageErrors: false,
          age: age,
    });
    };
  };

  handleWeightChange = (event) => {
    const weight = event.target.value;
    if(weight < 40 || weight > 200) {
      this.setState({
        weight: weight,
        weightErrors: true,
      });
    } else {
        this.setState({
          weight: weight,
          weightError: false,
          weightErrors: false,
      });
      };
  };

  handleHeightChange = (event) => {
    const height = event.target.value;
    if(height < 125 || height > 230) {
      this.setState({
        height: height,
        heightErrors: true,
      });
    } else {
        this.setState({
          height: height,
          heightError: false,
          heightErrors: false,
      });
      };
  };

  //No error detection since activity is defined to 1.375 by default
  handleActivityChange = (event) => {
    this.setState({
      activity: event.target.value,
    });
  };


  validationHandler = () => {

    const { 
      age,
      ageError,
      ageErrors,
      weight,
      weightError,
      weightErrors,
      height,
      heightError,
      heightErrors,
      gender,
      genderError,
      genderErrors } = this.state;
  
    //Check for blank fields and wrong input
    if (!age || age < 18 || age > 100) {
     this.setState({ ageErrors: true, ageError: true });
    } else { this.setState({  ageErrors: false, ageError: false, displayError: false  })};

    if (!weight || weight < 40 || weight > 200) {
     this.setState({ weightErrors: true, weightError: true });
    } else { this.setState({  weightErrors: false, weightError: false, displayError: false  })};

    if(!height || height < 125 || height > 230) {
     this.setState({ heightErrors: true, heightError: true });
    } else { this.setState({  heightErrors: false, heightError: false, displayError: false  })};

    if (!gender) {
      this.setState({ genderErrors: true, genderError: true });
    } else { this.setState({  genderErrors: false, genderError: false, displayError: false  })};

    //if all booleans are false - display formula
    if (ageErrors || ageError || 
        weightError || weightErrors || 
        heightError || heightErrors || 
        genderErrors || genderError ) {
          this.setState({ displayFormula: false, displayError: true  })
    } else {
          this.setState({ displayFormula: true, displayError: false  })
    };
  };

    //Check if gender is male or female and adjust caloric level, triggered with 'Calculate!' button
    adjustCalories = () => {
      let adjustedCalories = this.state.gender === "Male" ? parseInt(((10 * this.state.weight) + (6.25 * this.state.height) - (5 * this.state.age) + 5) * this.state.activity) : parseInt(((10 * this.state.weight) + (6.25 * this.state.height) - (5 * this.state.age) - 161) * this.state.activity);
  
      this.setState({ calories : adjustedCalories  });
    };

  //Adjusting calories & Validating on 'Calculate' click.
  buttonClickHandler = () => {
    this.validationHandler();
    this.adjustCalories();
    this.setState({ displayBulk: false, displayCut: false, displayGraph: false })
  };

  cutButtonHandler = () => {
    this.setState({
      displayFormula: false,
      displayCut: true,
      displayGraph: true,
      modifier: -350,
      carbModifier: '0.4',
      fatModifier: '0.4',
      proteinModifier: '0.2',
    });
  };

  bulkButtonHandler = () => {
    this.setState({
      displayFormula: false,
      displayBulk: true,
      displayGraph: true,
      modifier: 350,
      carbModifier: '0.4',
      fatModifier: '0.4',
      proteinModifier: '0.2'
    })
  };

  lowCarbHandler = () => {
    this.setState({
      carbModifier: '0.25',
      fatModifier: '0.5',
      proteinModifier: '0.25',
      displayGraph: true
    });
  };

  highCarbHandler = () => {
    this.setState({
      carbModifier: '0.5',
      fatModifier: '0.25',
      proteinModifier: '0.25'
    })
  };

  render() {
    return (
      <div>
      <MyContext.Provider 
          state={{  ...this.state }}>
          {this.props.children}
       </MyContext.Provider>
       

        <FormControl className="col-6">
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
          <TextField 
            type="number" 
            label="age"
            onChange={this.handleAgeChange}
            error={this.state.ageError}
            helperText={this.state.ageError ? 'age must be between 18 and 100 years' : ''}
            className="form-control col-4 my-2"
            id="age"
            placeholder="(years)"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="form-group row justify-content-center">
          <TextField 
            type="number" 
            label="weight"
            onChange={this.handleWeightChange}
            error={this.state.weightError}
            helperText={this.state.weightError ? 'weight must be between 40 and 200 kgs.' : ''}
            className="form-control col-4 my-2"
            id="weight"
            placeholder="(kg)"
            variant="outlined"
            size="small"
          /> 
        </div>
        <div className="form-group row justify-content-center">
          <TextField 
            type="number" 
            label="height"
            onChange={this.handleHeightChange}
            error={this.state.heightError}
            helperText={this.state.heightError ? 'height must be between 125 and 230 cm.' : ''}
            className="form-control col-4 my-2"
            id="height"
            placeholder="(cm)"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="form-group row justify-content-center">
          <FormControl variant="outlined" className="col-4 py-2" size="small">
            <Select
              labelId="activity"
              value={this.state.activity}
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
      {!this.state.isCalculated &&
        <button  
          className="btn btn-primary"
          onClick={this.buttonClickHandler}
          id="Calc-Btn">
            Calculate!
        </button> }

      {this.state.isCalculated &&
        <button  
          className="btn btn-primary"
          onClick={this.buttonClickHandler}
          id="Calc-Btn">
            Go back
        </button> }
      </div>
     </div>
    );
  }
}

export default UserForm;
export {  MyContext };
// export {  Consumer  };