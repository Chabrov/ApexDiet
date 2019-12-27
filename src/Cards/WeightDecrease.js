import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';


const WeightDecrease = (props) => {
  return(
    <div className="container">
      <p className="lead py-2">While cutting you generally want to stay slightly below mainteanance level ({props.calories} calories) for as long as you're losing weight. A good place to start is your mainteanance caloric level - 350 calories. In your case it should be <strong>{props.calories - 350} calories.</strong></p>
      <p>In terms of macronutrient distribution it's advised to start with moderate consumption of protein and carbs. A good place to start would be a classic 20% protein, 40% fat and 40% carbohydrate split. As for now there is no proven benefit in exceeding 1.6-1.8 grams of protein per kilogram of bodymass, even amongst muscle building oriented athletes. The protein intake may be increased during periods of cutting weight. It's a common practice to do so, while decreasing carbohydrate intake.</p>

      <div className="btn-group btn-group-lg py-3 justify-content-center" role="group" data-toggle="button">
          <button type="button" className="btn btn-light" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={props.handleClassic}>Classic 20/40/40 split</button>
          <button type="button" className="btn btn-light mx-2" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={props.handleLowCarb}>Lower Carbohydrate</button>
          <button type="button" className="btn btn-light" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={props.handleHighCarb}>Higher Carbohydrate</button>
      </div>
    </div>
  )
};

export default WeightDecrease;