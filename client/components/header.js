import styles from '../styles/header.module.css'
import Nav from './nav'
import Search from './search'
import Logo from './logo'
import Button from './button'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
import ViewListIcon from '@material-ui/icons/ViewList'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'

const Header = () => {
  return(
    <>
      <div className={styles.navArea}>
        <div className={styles.optsArea}>
          <Button type="withIcon">
            <PersonIcon />
            John Doe
          </Button>

          <Button type="withIcon">
            <AddIcon />
            New Project
          </Button>
        </div>

        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <Nav />
      </div>

      <div className={styles.searchArea}>
        <div className={styles.iconContainer}>
          <ViewComfyIcon style={{ 'fontSize': '1.8rem'}}/>
          <ViewListIcon style={{ 'fontSize': '1.8rem'}}/>
        </div>
        <div className={styles.searchContainer}>
          <Search />
        </div>
      </div>
    </>
  )
}

export default Header 