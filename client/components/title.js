import styles from '../styles/title.module.css'
import {PushpinOutlined} from '@ant-design/icons'

const Title = (props) => {
  return(
    <h1 className="h4">
      {props.children}
      <PushpinOutlined className={`${styles[props.type]} h4`} />
    </h1>
  )
}

export default Title 