import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import bikeFakedata from '../../Fakedata/fakedata.bike.json';
const Destination = () => {
    let {destinationType} = useParams();
    const [destination, setDestination] = useState([]);

    useEffect(() =>{
        setDestination(bikeFakedata);
        console.log(bikeFakedata);

    },[]);

    const handleBlur = (e) =>{
        const values = e.target.value;
        const name = e.target.name;
        
        if(name === 'from'){
          const pickFrom = values;
          console.log(pickFrom);
        }
    
        if(name === 'to'){
            const pickTo = values;
            console.log(pickTo);
        }
    };
 
    const handleSubmit =() =>{
        console.log('submit clicked');
    }
    console.log(destination);
    return (
        <div className="container">
            <div className="row mb-5">
                <div style={{textAlign: 'center'}}>
                    <h1 className="mt-3 mb-3">Let's Go our destination with a {destinationType} .</h1>
                    <Link to="/home"><button className="btn btn-primary ml-3">different Destination</button></Link>                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <form action="" >
                        <label for="from">Pick From</label><br/>
                        <input type="text" id="from" name="from" className="form-control" onBlur={handleBlur}/><br/>
                        <label for="to">Pick To</label><br/>
                        <input type="text" id="to" name="to" className="form-control" onBlur={handleBlur}/><br/>
                        <input type="button" onClick={handleSubmit} value="Search" className="btn-danger mt-3 form-control"/>
                    </form>

                </div>
                <div className="col-md-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d120862.51011560642!2d89.24272567641832!3d23.117918670627915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d23.1169649!2d89.3170018!5e0!3m2!1sen!2sbd!4v1594361862611!5m2!1sen!2sbd" className="Map" width="550" height="300" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;