import React from 'react';
import styles from '../ToDo/ToDo.scss'

function ToDo() {
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        <input type="checkbox" />
        <p>Placeholder text here</p>
      </div>
    </div>
  )
}

export default ToDo;
