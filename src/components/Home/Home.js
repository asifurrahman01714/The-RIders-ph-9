import React from 'react';
import './Home.css';
import bike from '../../images/bike.png';
import bus from '../../images/bus.png';
import car from '../../images/car.png';
import train from '../../images/train.png';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory()
    const handleDestination = (destinationType) => {
        history.push(`/destination/${destinationType}`);
        console.log('clicked card');
    }

    return (
        <div className="home ">
            <div className="container">
                <div className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col ">
                        <div onClick={() => handleDestination('bike')} className="card h-100  align-items-center shadow text-white bg-secondary">
                            <img src={bike} className="card-img-top img-style" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">BIKE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div  onClick={() => handleDestination('car')} className="card h-100 align-items-center shadow text-white bg-secondary">
                            <img src={car} className="card-img-top img-style" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">CAR</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div  onClick={() => handleDestination('bus')} className="card h-100 align-items-center shadow text-white bg-secondary">
                            <img src={bus} className="card-img-top img-style" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">BUS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div  onClick={() => handleDestination('train')} className="card h-100 align-items-center shadow text-white bg-secondary">
                            <img src={train} className="card-img-top img-style" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">TRAIN</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;