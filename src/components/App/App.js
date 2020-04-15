import React from 'react';
import ToDo from '../ToDo/ToDo';
import ContactCardList from '../ContactCardList/ContactCardList';

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
      <ContactCardList contact={{name: 'John Smith', phone: '345633', email: 'johnsmith@gmail.com'}} />
      <ContactCardList contact={{name: 'Jan Kowalski', phone: '654321', email: 'jankowalski@gmail.com'}} />
      <ContactCardList contact={{name: 'Klaus Miller', phone: '918273', email: 'klausmiller@gmail.com'}} />
    </div>
  )
}

export default App;
