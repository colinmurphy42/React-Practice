//Dope tutorial https://www.youtube.com/watch?v=dGcsHMXbSOA
//Always need
import React, {useState} from 'react';
//Getting component from another file
import Hello from './sayHi.js';
import Tweet from './Tweet.js'

//Component to be rendered
function App(){

    //First const parameter is actual name, second is something that can change its value
    const[isRed, setRed] = useState(false);
    //Pretty much setCount changes the state of count
    const[count, setCount] = useState(0);

    //Could do something like this in the future with API calls
    const[users,setUsers] = useState([
        { name : 'Colin', age : 22, message: "Sup" },
        { name : 'Oscar', age : 23, message: "Dup" },
        { name : 'Tristan', age : 21, message: "Yup" }
    ]);

    const increment = () => {
        //Using setCount
        setCount(count + 1);
        //Make isRed the opposite of what it is now
        setRed(!isRed);
    };

    return (
        <div className = "app">

            {/*If isRed is true use css file we made 'red', else do nothing */}
            <h1 className = {isRed ? 'red' : ''}> Change My Color </h1>

            <button onClick = {increment}>Increment</button>
            <h1> {count} </h1>

            {users.map(user => (
                 <Tweet name={user.name} message = {user.message} age = {user.age}/>
            ))}
        </div>
    );
}

export default App;