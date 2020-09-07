import Button from './button'
import ViewListIcon from '@material-ui/icons/ViewList'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'

const ProjectListViewOpts = () => {
  return(
    <div className="outer">
      <Button>
        <ViewComfyIcon style={{ 'fontSize': '1.8rem'}}/>
      </Button>

      <Button>
        <ViewListIcon style={{ 'fontSize': '1.8rem'}}/>
      </Button>

      <style jsx>{`
        .outer {
          display: flex;
          justify-content: center;
          margin-bottom: var(--s2);
        }
      `}</style>
    </div>
  )
}

export default ProjectListViewOpts