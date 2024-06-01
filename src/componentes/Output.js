import React from "react";
import '../stylesheets/Output.css';


function Output(props) {
    return(
        <div className="data__output__container">
            <h2 className='data__output__data'>{props.title}</h2>
        </div>
    );
}

export default Output;
/*Termina*/