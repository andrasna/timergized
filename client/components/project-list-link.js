import styles from '../styles/project-list-link.module.css'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import EditIcon from '@material-ui/icons/Edit'
import Link from 'next/link'

const ProjectCard = () => {
  return(
    <Link href="/">
      <a className={styles.item} >
        <div className={styles.image} style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=1')`}}></div>
        <div className={styles.infoArea}>
          <div>
            <p className={`${styles.title}`}>Sequi ab eaque incidunt et. Voluptatem deserunt</p>
            <p className={styles.timeSpent}>2d 20h 32m</p>
          </div>
          <div className={styles.iconContainer}>
            <EditIcon />
            <StarIcon style={{'color': 'var(--yellow)'}} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
