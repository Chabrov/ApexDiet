import React from 'react';
// import createContext from 'react'
// import UserForm from '../UserForm/UserForm'
import {  MyContext } from '../UserForm/UserForm'


const Formula = () => {
  return( 
    
    <MyContext.Consumer>
      {(state) =>{
          if  (state.displayFormula) {
            return <div className="container col-12 justify-content-center">
                    <p className="lead"><strong>Your estimated daily energy expenditure is {state.calories} calories per day.</strong></p>
                    <p>If you're willing to either gain or lose weight, it's advised to start with caloric difference of around 300-500 kilocalories. For bodyweight loss you want to be in a deficit, on the other hand for gaining mass you want to stay in a surplus. Those numbers are estimated on average, if you just started eating healthy and made rapid changes to your lifestyle you can benefit from even smaller differences from mainteanance level. Caloric intake should be adjusted every few weeks accordingly.</p>
                  </div> 
          } return null
      }}
    </MyContext.Consumer>
  );
};


export default Formula;