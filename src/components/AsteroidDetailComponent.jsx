import React, { Component } from 'react';
import dateFormat from 'dateformat';
import withLocationWrapper from './withLocationWrapper';

class AsteroidDetailComponent extends Component {

    constructor(props){
        super(props)
    }

    render() {
        console.log(JSON.stringify(this.props.location.state));
        const asteroidDetails = this.props.location.state;
        //const {state} = this.props.location.state;
        return (
            <div className="container_asteroid_detail">
            <h1>{asteroidDetails.name}</h1>
            <div className="asteroid-info">
              <p><strong>ID:</strong> {asteroidDetails.neoRefId}</p>
              <p><strong>Orbiting Body:</strong> {asteroidDetails.orbitingBody}</p>
              <p><strong>Miss Distance (km):</strong> {asteroidDetails.missDistanceInKilometer} </p>
              <p><strong>Estimated Diameter Min (km):</strong> {asteroidDetails.estimatedDiameterMin}</p>
              <p><strong>Estimated Diameter Max (km):</strong> {asteroidDetails.estimatedDiameterMax}</p>
              <p><strong>Potentially Hazardous:</strong> {asteroidDetails.potentiallyHazardous? 'Yes':'No'}</p>
              <p><strong>Date:</strong> {dateFormat(asteroidDetails.closeApproachDateTime, "mmmm dS, yyyy")} </p>
              <p><strong>Relative Velocity (km/h):</strong> {asteroidDetails.velocityInKilometersPerHour}</p>
              <p><strong>NASA JPL URL:</strong> <a href={asteroidDetails.nasaJplUrl} target="_blank">Visit NASA JPL</a></p>
            </div>
          </div>
        );
    }
}

export default withLocationWrapper(AsteroidDetailComponent);
