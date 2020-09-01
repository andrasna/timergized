import styles from '../styles/search.module.css'
import SearchIcon from '@material-ui/icons/Search'

const Search = () => {
  return(
    <form className={styles.form}>
      <input className={styles.input} placeholder="Search..." type="search" id="mySearch" name="q" />
      <button className={styles.button}>
        <span className="visuallyhidden">Search</span>
        <SearchIcon style={{'fontSize': '1.3rem'}} />
      </button>
    </form>
  )
}

export default Search