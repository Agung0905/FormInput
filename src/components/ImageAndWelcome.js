import React from 'react';
import mainImages from "../assets/images/aneka-makanan.png";

const ImagesAndWelcome =() => (
    <>
    <div className="row" style={{marginBottom:30}}>
       <img src={mainImages} width="100%" alt="Aneka Makanan"/>
    </div>
    <div className="row">
      <div className="col">
        <div className="card text-white bg-success md-3 text-center">
          <div className="card-header"><h1>Welcome to FoodParadise</h1></div>
          <div className="card-body">
            <h4 className="card-title">The Easiest Way to Find Restourants and Food</h4>
            <p className="card-text">You can grab information about restaurant, cafees, cuisine with just a afew click.</p>
            <p className="card-text">Start by choosing the featured cities below, or search the city name.</p>
          </div>
        </div>
      </div>
    </div>
    </>
);

export default ImagesAndWelcome;