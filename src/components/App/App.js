import React from 'react';
import ToDo from '../ToDo/ToDo';
import Joke from '../Joke/Joke';
//import { ProgressPlugin } from 'webpack';
import jokesData from '../Joke/jokesData';

/*class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}*/

function App() {
  const jokeComponents = jokesData.map(joke => 
      <Joke key={joke.id} question={joke.question} answer={joke.answer} />)

  return (
    <div>
      <ToDo />
      <ToDo />
      <ToDo />
      <ToDo />
      {jokeComponents}
    </div>
  )
}

export default App;
