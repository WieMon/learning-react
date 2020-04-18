import React from 'react';
import ToDo from '../ToDo/ToDo';
<<<<<<< HEAD
import Joke from '../Joke/Joke';
//import { ProgressPlugin } from 'webpack';
import jokesData from '../Joke/jokesData';
=======
import ContactCardList from '../ContactCardList/ContactCardList';
>>>>>>> 2

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
<<<<<<< HEAD
      {jokeComponents}
=======
      <ContactCardList contact={{name: 'John Smith', phone: '345633', email: 'johnsmith@gmail.com'}} />
      <ContactCardList contact={{name: 'Jan Kowalski', phone: '654321', email: 'jankowalski@gmail.com'}} />
      <ContactCardList contact={{name: 'Klaus Miller', phone: '918273', email: 'klausmiller@gmail.com'}} />
>>>>>>> 2
    </div>
  )
}

export default App;
