import React from 'react';
import styles from './MainHeading.module.css';

const MainHeading = () => {
  return (
    <div className={styles['heading-container']}>
        <div className={styles['empty-lines']}></div>
        <div className={styles['heading']}>Services</div>
        <div className={styles['empty-lines']}></div>
    </div>
  )
}

export default MainHeading