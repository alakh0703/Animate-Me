import React from 'react';
import "./Animations.css";

function Animations(props) {
    const animateHandler = () => {
        props.setAnimation(props.name);

        setTimeout(() => {
            props.setAnimation('');

        }, 2000);
    }

  return (
    <div className='menubar'>
        <p className='animate' onClick={animateHandler}>{props.name}</p>
    </div>
  )
}

export default Animations