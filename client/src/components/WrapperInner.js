import React from 'react'
import styles from './WrapperInner.module.css';

function WrapperInner(props) {
  return(
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
}

export default WrapperInner