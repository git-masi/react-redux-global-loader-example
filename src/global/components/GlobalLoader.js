import React from 'react';
import styles from './GlobalLoader.module.css';
import Portal from './Portal';

export default function GlobalLoader(props) {
  const { message = 'Loading...', show = false } = props;

  return (
    <>
      {show && (
        <Portal className={styles.container}>
          <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h3 className={styles.heading}>{message}</h3>
        </Portal>
      )}
    </>
  );
}
