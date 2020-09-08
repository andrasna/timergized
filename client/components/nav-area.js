import Nav from './nav'
import Search from './search'
import Button from './button'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'

const NavArea = () => {
  return(
    <div className="nav-area">
      <div className="opts-area">
        <Button withIcon>
          <PersonIcon />
          John Doe
        </Button>

        <Button withIcon>
          <AddIcon />
          Add New
        </Button>
      </div>

      <Search />

      <Nav />

      <style jsx>{`
        .nav-area {
          display: grid;
          grid-template-columns: auto 1fr auto;
          padding: var(--s1) var(--s3);
          background: var(--bg-nav);
          margin-bottom: 1rem;
          gap: var(--s3);
          align-items: center;
        }

        .opts-area {
          display: grid;
          gap: var(--s3);
          justify-content: start;
          grid-template-columns: auto auto;
        }
    `}</style>
    </div>
  )
}

export default NavArea 