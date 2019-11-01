import React from 'react';
import {plan} from '../data';
import {Link} from "react-router-dom";

function Lines() {


    return (
    <div>
          {plan.map((line, index) => (
            <h5 key={index}>
              <Link to={`/line/${index + 1}`}>{line.name}</Link>
            </h5>
          ))}
    </div>
      );
  
}

export default Lines;
