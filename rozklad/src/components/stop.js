import React from 'react';
import {plan} from '../data';
import {Link} from "react-router-dom";
import moment from 'moment';

function Stop({match}) {
    const {
        params: { lineId , stopId}
      } = match;

      function modifyDate(time){
        var d = new moment(time, 'HH:mm').format('HH:mm');

        d = moment(d, "HH:mm")
        .add(plan[lineId -1].stops[stopId -1].time, 'minutes')
        .format('HH:mm');

        return d;
      }


      return (
          <div>
        {plan[lineId - 1].times.map((deptime, index) => (
           
          <button key={index}>
            <Link to={`/line/${lineId}/${stopId}/${index + 1 }`}>{modifyDate(deptime)}</Link>
          </button>
        ))}
        </div>
      );
  
}

export default Stop;