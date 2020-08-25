import styles from '../styles/search.module.css'
import {SearchOutlined} from '@ant-design/icons';

const Search = () => {
  return(
    <form className={styles.form}>
      <input className={styles.input} placeholder="Search..." type="search" id="mySearch" name="q" />
      <button className={styles.button}>
        <span className="visuallyhidden">Search</span>
        <SearchOutlined />
      </button>
    </form>
  )
}

export default Search