import React from 'react';

const CityCard = (props) => (
    <div className="col-4">
        <div className="card bg-light md-3">
            <div className="card-body">
                <h3 className="card-title">{props.city.name}</h3>
                <p>{props.city.country_name}</p>
                <a href="/#" className="card-text">
                See Restourants in {props.city.name}
                </a>
            </div>                      
        </div>
    </div> 

);

export default CityCard;