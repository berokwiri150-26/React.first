import App from '../App';
import React, { useState } from 'react';

const UserHobbies = (props) => {
    const [hobbies] = useState ([
        'Coding',
        'Cycling',
        'Driving',
        'Eating',
        'Swimming',
        'Working',
        'Traveling',
        'Cooking',
        'Reading',
        'Networking',
    ]);
    return(
        <div className="hobbies-container">
         <h2>{props.name || "User"}'s Hobbies</h2>
<p>Greetings dear viewer! Welcome to this very appealing website. It's one of a kind, I must say.</p>
<p> Here is a list of my hobbies, so you can get to know me better. Are you ready? ;)</p>

            <ul>
  {hobbies.map((hobby, index) => {
    const specialHobbies = ['Cooking', 'Reading', 'Networking'];
    const isSpecial = specialHobbies.includes(hobby);

    const hobbyStyle = {
      padding: '10px',
      backgroundColor: isSpecial ? 'darkblue' : 'transparent',
      color: isSpecial ? 'black' : 'purple',
      fontWeight: isSpecial ?  'bold': 'normal',
      border: isSpecial ? '3px solid darkblue' : '3px liquid purple', 
      borderRadius: '30px',
      width: '200px',
      textAlign: isSpecial ? 'center' : 'left',
      /*Text alignment isn't working for me, need help on that*/
    };
    return (
            <li key={index} style={hobbyStyle}>
              {isSpecial ? ` ${hobby} ` : hobby}
            </li>
                 );
              })}
           </ul>

           <p> I hope you enjoyed this list of hobbies. If you have any questions, feel free to ask! </p>
        </div>
       );
    }
export default UserHobbies;




