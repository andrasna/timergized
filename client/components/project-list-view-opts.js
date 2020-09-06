import Button from './button'
import styles from '../styles/project-list-view-opts.module.css'
import ViewListIcon from '@material-ui/icons/ViewList'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'

const ProjectListViewOpts = () => {
  return(
    <div className={styles.container}>
      <Button>
        <ViewComfyIcon style={{ 'fontSize': '1.8rem'}}/>
      </Button>

      <Button>
        <ViewListIcon style={{ 'fontSize': '1.8rem'}}/>
      </Button>
    </div>
  )
}

export default ProjectListViewOpts 