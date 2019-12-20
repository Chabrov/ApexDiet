import React from 'react';

const Formula = (props) => {
  return( 
    <div className="container col-12 justify-content-center">
      <p className="lead"><strong>Your estimated daily energy expenditure is {props.calories} calories per day.</strong></p>
      <p>If you're willing to either gain or lose weight, it's advised to start with caloric difference of around 300-500 kilocalories. For bodyweight loss you want to be in a deficit, on the other hand for gaining mass you want to stay in a surplus. Those numbers are estimated on average, if you just started eating healthy and made rapid changes to your lifestyle you can benefit from even smaller differences from mainteanance level. Caloric intake should be adjusted every few weeks accordingly.</p>
    </div>
  )
}


export default Formula;