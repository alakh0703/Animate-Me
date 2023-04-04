import React from 'react';
import Playground from './Playground';
// import Bar from './Bar';
import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.main}>
        <Playground />
        
    </div>

  )
}

export default Main;