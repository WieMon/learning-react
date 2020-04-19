import React from 'react';
import ToDo from '../ToDo/ToDo';
//import Joke from '../Joke/Joke';
//import jokesData from '../Joke/jokesData';
//import ContactCardList from '../ContactCardList/ContactCardList';
//import Product from '../Product/Product';
//import productsData from '../../data/vschoolProducts';
import todosData from '../../data/todosData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      todos: todosData
    }
  }
  render() {
    let wordDisplay
    const todoItem = this.state.todos.map(item => <ToDo key={item.id} item={item} />)

    if (this.state.isLoggedIn) { // isLoggedIn is boolean so === true can be deleted
      wordDisplay = 'in'
    } else {
      wordDisplay = 'out'
    }

    return (
      <div>
        <div>
          <h1>You are currently logged {wordDisplay}</h1>
        </div>
        <div className="todo-list">
          {todoItem}
        </div>
      </div>
    )
  }
}

/*function App() {
  const toDos = todosData.map(item => <ToDo key={item.id} item={item} />)
  const jokeComponents = jokesData.map(joke => 
    <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
  const productComponents = productsData.map(item => 
    <Product key={item.id} product={item} />)
  

  return (
    <div>
      <div>
        
      </div>
      <div> 
        {jokeComponents}
      </div>
      <div>
        <ContactCardList contact={{name: 'John Smith', phone: '345633', email: 'johnsmith@gmail.com'}} />
        <ContactCardList contact={{name: 'Jan Kowalski', phone: '654321', email: 'jankowalski@gmail.com'}} />
        <ContactCardList contact={{name: 'Klaus Miller', phone: '918273', email: 'klausmiller@gmail.com'}} />
      </div>
      <div>
        {productComponents}
      </div>
      <div>
        {toDos}
      </div>
    </div>
  )
}*/

export default App;
