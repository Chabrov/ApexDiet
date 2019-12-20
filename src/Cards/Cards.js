import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';


const Card = (props) => {
  return(
    <div className="row py-4">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Cutting down?</h5>
            <p className="card-text">Do you want to lose weight, while still maintaining muscle mass?</p>
            <button className="btn btn-info" onClick={props.handleCutButton}>Proceed</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Bulking up?</h5>
            <p className="card-text">Are you looking to increase body mass, without getting additional fat?</p>
            <button className="btn btn-info" onClick={props.handleBulkButton}>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;