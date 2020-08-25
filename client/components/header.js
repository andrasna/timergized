import styles from '../styles/header.module.css'
import Nav from './nav'
import Search from './search'
import Logo from './logo'
import Button from './button'
import {UserOutlined, PlusOutlined} from '@ant-design/icons';

const Header = (props) => {
  return(
    <div className={styles.outer}>
      <div className={styles.inner}>
        <Logo />

        <Button type="withIcon">
          <UserOutlined />
          John Doe
        </Button>

        <Button type="withIcon">
          <PlusOutlined />
          New Project
        </Button>

        <Search />
      </div>

      <Nav />
  
      {props.children}
    </div>
  )
}

export default Header 