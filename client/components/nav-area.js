import styles from '../styles/nav-area.module.css'
import Nav from './nav'
import Search from './search'
import Button from './button'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'

const NavArea = () => {
  return(
    <div className={styles.navArea}>
      <div className={styles.optsArea}>
        <Button type="withIcon">
          <PersonIcon />
          John Doe
        </Button>

        <Button type="withIcon">
          <AddIcon />
          Add New
        </Button>

        <Search />
      </div>

      <Nav />
    </div>
  )
}

export default NavArea 