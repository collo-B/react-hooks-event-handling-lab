import React from 'react';

 function Keypad (){
 function handleChange (){
console.log('Entering password...')
 }

 return (
    <input
    type="password"
    name="password"
    onChange={handleChange}
    // placeholder="Entering password..."
  />
 )
 }
 export default Keypad