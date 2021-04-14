import React, {useState} from 'react';
import Tweet from './tweet';


function App(){

  const [users] = useState([
    {name: 'Pet Food', message: 'Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät.'},
    {name: 'Pet Supplies', message: 'On todistettu, että lukijaa häiritsee sivun ulkoasu lukiessaan sivua. Lorem Ipsumin käytön tarkoitus on, että se omaa enemmän-tai-vähemmän normaalimpaa sanojen sijoitusta kuin "Sisältöä tähän, sisältöä tähän."'},
    {name: 'Vet Information', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et arcu a odio fermentum aliquam quis eget turpis. Morbi egestas eget eros non tincidunt. Integer.'}
  ]);

  return (
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}

    </div>
  )
}

export default App;