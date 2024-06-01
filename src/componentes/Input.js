import React from 'react';
import '../stylesheets/Input.css'

const Input = React.forwardRef((props, ref) => {
    return(
        <div className='data-input'>
            <input ref={ref} value={props.value} className='number-input' type='number' placeholder={props.children} onChange={props.change} onKeyDown={props.keydown} required/>
        </div>
    );
})

export default Input;

/*Termina*/