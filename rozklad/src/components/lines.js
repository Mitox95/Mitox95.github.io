import React from 'react';
import {plan} from '../data';
import {Link} from "react-router-dom";
import "./lines.scss";

function Lines() {


    return (
    <div className="body">
          {plan.map((line, index) => (
            <h5 className="text" key={index}>
              <Link to={`/line/${index + 1}`} className="brk-btn">{line.name}</Link>
            </h5>
          ))}
    </div>
      );
  
}

export default Lines;
