import React from 'react';  //This line is needed everytime

function Hello(){

    const sayHello = () => {
        console.log("hello");
    };

    return(
        <div>
            <h2>work</h2>
            <button onClick = {sayHello}> Say Hello </button>
        </div>
    );

}
//Exporting the component
export default Hello;