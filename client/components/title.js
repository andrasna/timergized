import styles from '../styles/title.module.css'

const Title = (props) => {
  return(
    <h1 className="h4">
      {props.children}
    </h1>
  )
}

export default Title 