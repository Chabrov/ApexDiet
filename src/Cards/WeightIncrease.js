import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';


const WeightIncrease = (props) => {
  return(
    <div className="container">
      <p className="lead py-2">While building muscle tissue a rule of thumb is to aim for bodymass increasement around 1-2kg per month, which translates to 0.25-0.5kg per week. This amount will vary greatly, considering your fitness level, genetic predispositions and prior years of training. Generally the more advanced you are, the harder it is to pack on additional muscle tissue. A surplus of 350 kilocalories from your mainteanance level ({props.calories} calories) will be equal to <strong>{props.calories + 350} calories.</strong> Reeavluate it once your bodymass stands still.</p>
      <p>In terms of macronutrient distribution it's advised to start with moderate consumption of protein and carbs. A good place to start would be a classic 20% protein, 40% fat and 40% carbohydrate split. As for now there is no proven benefit in exceeding 1.6-1.8 grams of protein per kilogram of bodymass, even amongst muscle building oriented athletes. If you're focused on doing so, you should consider upping your carbohydrate and fat levels accordingly, to your preferences.</p>
    </div>
  )
};

export default WeightIncrease;