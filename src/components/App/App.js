import React from 'react';
import ToDo from '../ToDo/ToDo';


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
    </div>
  )
}

export default App;
