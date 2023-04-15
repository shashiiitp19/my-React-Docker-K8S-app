import React from "react";
import classes from './Card.module.css';
const Card = props =>{
    //console.log("Hello Children");
    //console.log(props.children);
    //console.log(props);
    return (
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
}
export default Card;