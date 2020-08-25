import styles from '../styles/alert.module.css'

const Alert = (props) => {
  return(
    <>
      <p className={styles[props.type]}>
        {props.children}
      </p>
    </>
  )
}

export default Alert 