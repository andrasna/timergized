import Link from 'next/link'
import styles from '../styles/nav.module.css'

const Nav = () => {
  return(
    <nav>
      <ul className={styles.primary}>
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