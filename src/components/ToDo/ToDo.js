import React from 'react';
import styles from '../ToDo/ToDo.scss'

//import { ProgressPlugin } from 'webpack';

function ToDo(props) {
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        <input type="checkbox" checked={props.item.completed} />
        <p>{props.item.text}</p>
      </div>
    </div>
  )
}

export default ToDo;
