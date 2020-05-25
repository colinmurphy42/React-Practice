import React from 'react';
import "./App.css"; //So we can get that juicy css

//props parameters looks at things you added to component call. Like a class with features
function Tweet(props){
    return(
        <div className="tweet">
            {/*Dont forget that to use javascript include brackets*/}
            <h3> {props.name} </h3>
            <p class="serif">{props.message}</p>
            <h3> {props.age} </h3>
        </div>
    );
}
export default Tweet;