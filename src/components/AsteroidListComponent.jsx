import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AsteroidLookupService from '../services/AsteroidLookupService';

class AsteroidListComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            asteroidDetailsList: []
        }
        // Create a property to store cached data
        this.cachedData = null;
    }

componentDidMount(){

     // Check if data is cached in sessionStorage
     const cachedData = sessionStorage.getItem('cachedData');
    // Check if data is already cached
    if (this.cachedData) {
        // Use the cached data
        const parsedData = JSON.parse(cachedData);
        // If cached data exists, set it to the state
        this.setState({ asteroidDetailsList: this.parsedData });
    } else {
        // If no cached data, make the API request
        AsteroidLookupService.getAsteroidDetails().then((res) =>{
        // Cache the data in localStorage
        sessionStorage.setItem('cachedData', JSON.stringify(res.data));
        // Set the data in the component's state
        this.setState({asteroidDetailsList:res.data})
        },[]);
    }
}

    render() {
        return (
            <div>
                
                <h2 className='text-center'> ASTEROIDS </h2>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Distance (in Km) </th>
                                <th> Hazard </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.asteroidDetailsList.map(
                                    asteroidDetails =>
                                    <tr key={asteroidDetails.neoRefId}>
                                        <td>
                                        <Link to = "/asteroidDetail" state={asteroidDetails}>
                                            {asteroidDetails.name}
                                        </Link>
                                        </td>
                                        <td>{asteroidDetails.missDistanceInKilometer}</td>
                                        <td style={asteroidDetails.potentiallyHazardous? { color: 'red', fontWeight: 'bold',fontSize:'20px'} : {}}>{asteroidDetails.potentiallyHazardous? '!!!':''}
                                        </td>
                                    </tr>
                                        
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default AsteroidListComponent;