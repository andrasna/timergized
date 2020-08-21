import React from 'react'
import styles from './WrapperOuter.module.css';

function WrapperOuter(props) {
  return(
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
}

export default WrapperOuter