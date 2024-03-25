import React, {useState, useRef} from 'react';
import "./Playground.css";
import Animations from './Animations';
import Bounce from './Codes';

function Playground() {
    const [animation, setAnimation] = useState('');
    const [changedivv, setChangedivv] = useState(false);
    let changeText = "cnamediv scale-in-hor-left";
    const [code, setCode] = useState(Bounce); // [state, setState
    const [playground , setPlayground] = useState(true);
    const [text, setText] = useState('John Wick');

    const maintext = useRef("");
    const nameChangeHandler = () => {
        
        setText(maintext.current.value);
        changeText = "cnamediv scale-out-hor-left";
        setChangedivv(false);
        setTimeout(() => {
            changeText = "cnamediv scale-in-hor-left";
        }
        , 1000);

    }
    const showChangeDiv = () => {
        setChangedivv(true);
    }

    const attentionSeekers = ['Bounce','Text', 'Flash','Pulse','RubberBand','ShakeX','ShakeY','HeadShake','Swing','Tada','Wobble','Jello','HeartBeat'];
    const backEntrances = ['BackInDown','BackInLeft','BackInRight','BackInUp'];
    const backExits = ['BackOutDown','BackOutLeft','BackOutRight','BackOutUp'];
    const bouncingEntrances = ['BounceIn','BounceInDown','BounceInLeft','BounceInRight','BounceInUp'];

    const bouncingExits = ['BounceOut','BounceOutDown','BounceOutLeft','BounceOutRight','BounceOutUp'];
    const fadingEntrances = ['FadeIn','FadeInDown','FadeInDownBig','FadeInLeft','FadeInLeftBig','FadeInRight','FadeInRightBig','FadeInUp','FadeInUpBig'];
   
    const fadingExits = ['FadeOut','FadeOutDown','FadeOutDownBig','FadeOutLeft','FadeOutLeftBig','FadeOutRight','FadeOutRightBig','FadeOutUp','FadeOutUpBig'];
  
    const flippers = ['FlipInX','FlipInY','FlipOutX','FlipOutY'];

    const lightspeed = ['LightSpeedInRight','LightSpeedInLeft','LightSpeedOutRight','LightSpeedOutLeft'];
    const rotatingEntrances = ['RotateIn','RotateInDownLeft','RotateInDownRight','RotateInUpLeft','RotateInUpRight'];

    const rotatingExits = ['RotateOut','RotateOutDownLeft','RotateOutDownRight','RotateOutUpLeft','RotateOutUpRight'];
    const special = ['Hinge','JackInTheBox','RollIn','RollOut'];
    const zoomingEntrances = ['ZoomIn','ZoomInDown','ZoomInLeft','ZoomInRight','ZoomInUp'];
    const zoomingExits = ['ZoomOut','ZoomOutDown','ZoomOutLeft','ZoomOutRight','ZoomOutUp'];
    const slidingEntrances = ['SlideInDown','SlideInLeft','SlideInRight','SlideInUp'];
    const slidingExits = ['SlideOutDown','SlideOutLeft','SlideOutRight','SlideOutUp'];
   


  return (
    <>
   {changedivv && <div className={changeText}>
        <input type="text" className="changenameIN" ref={maintext} placeholder="Enter Text" />
        <button className="changenameBTN" onClick={nameChangeHandler}>Change</button>
    </div>}
  <a className='changename' onClick={showChangeDiv} >Change Text</a>

 <div className="main">
        
        <div className="box">
              <p className={animation}>{text}</p>
        </div>  
    </div>
   
    <div className="main2">
        <p className='taggers'>Attention Seekers</p>
        {attentionSeekers.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Back Entrances</p>
        {backEntrances.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Back Exits</p>
        {backExits.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Bouncing Entrances</p>
        {bouncingEntrances.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Bouncing Exits</p>
        {bouncingExits.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Fading Entrances</p>
        {fadingEntrances.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Fading Exits</p>
        {fadingExits.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Flippers</p>
        {flippers.map((name) => {

            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Lightspeed</p>
        {lightspeed.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Rotating Entrances</p>
        {rotatingEntrances.map((name) => {

            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Rotating Exits</p>
        {rotatingExits.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Special</p>
        {special.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Zooming Entrances</p>

        {zoomingEntrances.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Zooming Exits</p>
        {zoomingExits.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Sliding Entrances</p>
        {slidingEntrances.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}
        <p className='taggers'>Sliding Exits</p>
        {slidingExits.map((name) => {
            return <Animations name={name} setAnimation={setAnimation} />
        })}

            
    </div>
 
      </>
  )
}

export default Playground;
