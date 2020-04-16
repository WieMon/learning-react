import React from 'react';
//import styles from '../Joke/Joke.scss';

function Joke(props) {
  return (
    <div>
      <h3 style={{display: !props.question && 'none'}}>Question: {props.question}</h3>
      <h3 style={{color: !props.answer && '#888888'}}>Answer: {props.answer}</h3>
    </div>
  )
}

export default Joke;
