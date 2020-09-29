import React from 'react';
import '../styles/routing.css';
import {Link} from 'react-router-dom';

   
const hour = new Date().getHours();


let str='';
if((hour>=0) && (hour<12))
{
    str='Good Morning';
}
else if((hour>=12) && (hour<=16))
{
    str='Good Afternoon';
}
else{
    str='Good evening';
}


const Routing = () => {

    return (
        <>
        <div className="div_routing">
           <h3 className="route_heading">{str}</h3>
            <div className="route_div">
                <div className="route_one">
                    <Link to='/'><button type="button">View List</button></Link>
                </div>
                <div className="route_one">
                    <Link to='/form'><button type="button">Add Note</button></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Routing;