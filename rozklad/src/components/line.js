import React from 'react';
import { plan } from '../data';
import { Link} from "react-router-dom";
function Line({match}) {
    const {
        params: { lineId }
      } = match;
    const stop = plan[lineId - 1];

      return (
        <div>
        {stop.stops.map((stop, index) => (
          <h5 key={index}>
            <Link to={`/line/${lineId}/${index + 1}`}>{stop.stop}</Link>
          </h5>
        ))}
  </div>
      );
  
}

export default Line;