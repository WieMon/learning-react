import React from 'react';
import ToDo from '../ToDo/ToDo';
import Joke from '../Joke/Joke';

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
  return (
    <div>
      <ToDo />
      <ToDo />
      <ToDo />
      <ToDo />
      <Joke question="Question 1" answer="Answer 1" />
      <Joke />
      <Joke question="Question 3" answer="Answer 3" />
    </div>
  )
}

export default App;
