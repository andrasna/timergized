import styles from '../styles/project-link.module.css'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import EditIcon from '@material-ui/icons/Edit'
import Link from 'next/link'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const ProjectLink = () => {
  return(
    <Link href="/">
      <a className={styles.link} >
        <div className={styles.image} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=${getRandomInt(1, 10000)}')`}}></div>
        <div className={styles.details}>
          <div>
            <p className={styles.title}>Sequi ab eaque incidunt et. Voluptatem deserunt</p>
            <p className={styles['time-spent']}>2d 20h 32m</p>
          </div>
          <div className={styles.icons}>
            <EditIcon />
            <StarIcon style={{'color': 'var(--bgc-star-icon)'}} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProjectLink
