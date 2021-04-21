import React from 'react';
import { useSelector } from 'react-redux';

// Redux store
import { currentGlobalLoaderState } from './globalLoaderSlice';

// Styles
import styles from './GlobalLoader.module.css';

// Components
import Portal from './Portal';

export default function GlobalLoader(props) {
  const { message = 'Loading...' } = props;
  const showLoader = useSelector(currentGlobalLoaderState);

  return (
    <Portal>
      {showLoader && (
        <div className={styles.container}>
          <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h3 className={styles.heading}>{message}</h3>
        </div>
      )}
    </Portal>
  );
}
