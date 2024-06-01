import React from 'react';
import '../stylesheets/Selector.css';

/*asigna un id al input y le pone el mismo id en forma de clase al label*/

const Selector = React.forwardRef((props, ref) => {
    return(
        <div className='data-selector'>
            <input type='checkbox' value={props.value} id={props.id}></input>
            <label ref={ref} name='choiseBtn' className={props.id} htmlFor={props.id} onClick={props.action}>{props.children}</label>
        </div>
    )
})






export default Selector;
/*Termina*/