import React from 'react';
import {plan} from '../data';
import moment from 'moment';

function Time({match}) {
    const {
        params: { lineId, timeId}
      } = match;

      function modifyDate(time){
        var d = new moment(plan[lineId -1].times[timeId - 1], 'HH:mm').format('HH:mm');
        d = moment(d, "HH:mm")
        .add(time, 'minutes')
        .format('HH:mm');
        return d;
      }

      return (
          <div>
        {plan[lineId - 1].stops.map((stop) => (
           <div>
            {stop.stop} - {modifyDate(stop.time)}
           </div>
          
        ))}
        </div>
      );
  
}

export default Time;