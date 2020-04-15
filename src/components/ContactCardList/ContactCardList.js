import React from 'react';
import styles from '../ContactCardList/ContactCardList.scss';

function ContactCardList(props) {
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        <h3>{props.contact.name}</h3>
        <p>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
      </div>
    </div>
  )
}

export default ContactCardList;
