import styles from '../styles/wrapper.module.css'

const Wrapper = (props) => {
  return(
    <div className={styles[props.type]}>
      {props.children}
    </div>
  )
}

export default Wrapper