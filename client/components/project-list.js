import styles from '../styles/project-list.module.css'
import Title from './title'

const ProjectList = (props) => {
  return(
    <ul className={styles.list}>
      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=1')`}}>
          <p className={`${styles.title} h5`}>Sequi ab eaque incidunt et. Voluptatem deserunt</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=2')`}}>
          <p className={`${styles.title} h5`}>Sequi ab eaque incidunt et tincidunt ante quis</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=3')`}}>
          <p className={`${styles.title} h5`}>Sequi ab eaque incidunt et orci justo</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=4')`}}>
          <p className={`${styles.title} h5`}>Donec nulla magna, posuere ab eaque incidunt et</p>
        </a>
      </li>


      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=5')`}}>
          <p className={`${styles.title} h5`}>Sequi ab eaque incidunt et. Voluptatem deserunt</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=6')`}}>
          <p className={`${styles.title} h5`}>Sequi ab eaque incidunt et tincidunt ante quis</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=7')`}}>
          <p className={`${styles.title} h5`}>Sequi ab eaque incidunt et orci justo</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=8')`}}>
          <p className={`${styles.title} h5`}>Donec nulla magna, posuere ab eaque incidunt et</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=9')`}}>
          <p className={`${styles.title} h5`}>Sequi ab eaque incidunt et orci justo</p>
        </a>
      </li>

      <li>
        <a className={styles.link} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=10')`}}>
          <p className={`${styles.title} h5`}>Donec nulla magna, posuere ab eaque incidunt et</p>
        </a>
      </li>
    </ul>
  )
}

export default ProjectList 