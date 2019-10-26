import React from 'react';
import { plan } from '../data';
import { Link} from "react-router-dom";
import './line.scss';

function Line({match}) {
    const {
        params: { lineId }
      } = match;
    const stop = plan[lineId - 1];

      return (

   <div className="catto">
          
        {stop.stops.map((stop, index) => (
          <h5 className="cat" key={index}>
            <Link  to={`/line/${lineId}/${index + 1}`} className="line">{stop.stop}</Link>
          </h5>
        ))}
  </div>
      );
  
}

export default Line;