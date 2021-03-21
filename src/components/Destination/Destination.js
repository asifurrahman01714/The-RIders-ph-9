import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import bikeFakedata from '../../Fakedata/fakedata.bike.json';
import busFakedata from '../../Fakedata/fakedata.bus.json';
import trainFakedata from '../../Fakedata/fakedata.train.json';
import carFakedata from '../../Fakedata/fakedata.car.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUsers } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    let {destinationType} = useParams();
    const [destination, setDestination] = useState([]);

    useEffect(() =>{
        
        if (destinationType === 'bike') {
            setDestination(bikeFakedata);
        }else if (destinationType === 'bus') {
            setDestination(busFakedata);
        }else if (destinationType === 'car') {
            setDestination(carFakedata);
        }else if(destinationType === 'train') {
            setDestination(trainFakedata);
        }
        // console.log(bikeFakedata);

    },[]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    let pickFrom;
    let pickTo;
    const handleBlur = (e) =>{
        const values = e.target.value;
        const name = e.target.name;
        
        if(name === 'from'){
          pickFrom = values;
          console.log(pickFrom);
          setFrom(pickFrom);
        }
    
        if(name === 'to'){
            pickTo = values;
            console.log(pickTo);
            setTo(pickTo);
        }
        
        
        
    };
    console.log(from);
    console.log(to);


    const [style, setStyle] = useState(false);
    let formStyle1;
    let formStyle2;
    if (style) {
        formStyle1 = {
            display: 'none'
        };

        formStyle2 = {
            display: 'block'
        };
    } else {
        formStyle1 = {
            display: 'block'
        };
        formStyle2 = {
            display: 'none'
        };
    }
    console.log(destination[0]);
    return (
        <div className="container">
            <div className="row mb-5">
                <div style={{textAlign: 'center'}}>
                    <h1 className="mt-3 mb-3">Let's Go our destination with a {destinationType} .</h1>
                    <Link to="/home"><button className="btn btn-primary ml-3">different Destination</button></Link>                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {/* <p>Form style: {style.toString()}</p> */}
                    <form action="" style={formStyle1}>
                        <label for="from">Pick From</label><br/>
                        <input type="text" id="from" name="from" className="form-control" onBlur={handleBlur}/><br/>
                        <label for="to">Pick To</label><br/>
                        <input type="text" id="to" name="to" className="form-control" onBlur={handleBlur}/><br/>
                        <input type="button" onClick={() => setStyle(!style)} value="Search" className="btn-danger mt-3 form-control"/>
                    </form>

                    <div className="container bg-secondary pt-3 rounded shadow" style={formStyle2}>
                        <div  style={{height:'100px'}} className=" bg-danger text-white p-3 align-items-center rounded shadow">
                            <h5>From : {from} </h5>
                            <h5>To {''}: {to}</h5>
                        </div>
                        <div className="row bg-light mt-3 align-items-center" style={{height:'50px'}}>
                            <div className="col-4"><img src={destination && destination[0]?.img} className="w-50" alt=""/></div>
                            <div className="col-6">{destination && destination[0]?.name}<FontAwesomeIcon icon={faUsers} className='ml-2 mr-2' />2</div>
                            <div className="col-2">{destination && destination[0]?.price}</div>
                        </div>

                        <div className="row bg-light mt-3 align-items-center" style={{height:'50px'}}>
                            <div className="col-4"><img src={destination && destination[1]?.img} className="w-50" alt=""/></div>
                            <div className="col-6">{destination && destination[1]?.name}<FontAwesomeIcon icon={faUsers} className='ml-2 mr-2'/>3</div>
                            <div className="col-2">{destination && destination[1]?.price}</div>
                        </div>

                        <div className="row bg-light mt-3 align-items-center" style={{height:'50px'}}>
                            <div className="col-4"><img src={destination && destination[2]?.img} className="w-50" alt=""/></div>
                            <div className="col-6">{destination && destination[2]?.name}<FontAwesomeIcon icon={faUsers} className='ml-2 mr-2'/>4</div>
                            <div className="col-2">{destination && destination[2]?.price}</div>
                        </div>
                    </div>

                </div>
                <div className="col-md-8 mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d120862.51011560642!2d89.24272567641832!3d23.117918670627915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d23.1169649!2d89.3170018!5e0!3m2!1sen!2sbd!4v1594361862611!5m2!1sen!2sbd" className="Map" width="100%" height="100%" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;