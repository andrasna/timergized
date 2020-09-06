import Link from 'next/link'
import styles from '../styles/nav.module.css'

const Nav = () => {
  return(
    <nav className={styles.nav}>
      <button className={styles['mobile-menu']} aria-expanded="false">
        <span className="visuallyhidden">Menu</span>

        <div className={styles.toggler}>
          <span className={styles['toggler-line-top']}></span>
          <span className={styles['toggler-line-center']}></span>
          <span className={styles['toggler-line-bottom']}></span>
        </div> 
      </button>

      <ul className={styles.menu}>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/projects"><a>Projects</a></Link></li>
        <li><Link href="/clients"><a>Clients</a></Link></li>
        <li><Link href="/teams"><a>Teams</a></Link></li>
        <li><Link href="/reports"><a>Reports</a></Link></li>
      </ul>
    </nav>
  )
}

export default Nav