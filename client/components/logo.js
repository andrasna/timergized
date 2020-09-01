import Link from 'next/link'
import styles from '../styles/logo.module.css'

const Logo = () => {
  return(
    <Link href="/">
      <a><h1 className={`${styles.normal} h5`}>Timergized</h1></a>
    </Link>
  )
}

export default Logo 