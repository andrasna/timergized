import styles from '../styles/button.module.css'

const Button = (props) => {
  return(
    <button className={styles[props.type]}>
      {props.children}
    </button>
  )
}

export default Button