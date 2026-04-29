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
    return (
        <div className="hobbies-container">
         <h2>{props.name}'s Hobbies</h2>
            <ul>
  {props.hobbies.map((hobby, index) => {
    const specialHobbies = ['Cooking', 'Reading', 'Networking'];
    const isSpecial = specialHobbies.includes(hobby);

    const hobbyStyle = {
      padding: '10px',
      backgroundColor: isSpecial ? 'darkblue' : 'transparent',
      color: isSpecial ? 'white' : 'black',
      fontWeight: isSpecial ? 'bold' : 'normal',
      border: isSpecial ? '3px solid darkblue' : 'none',
      display: 'inline-block',
      width: '200px',
    };
    return (
      <li key={index} style={hobbyStyle}>
        {isSpecial ? `⭐ ${hobby} ⭐` : hobby}
      </li>
    );
  })}
  </ul>
        </div>
       );
    }
export default UserHobbies;




