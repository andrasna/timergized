import Nav from './nav'
import Search from './search'
import Button from './button'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
import width from '../theme/width.js'

const NavArea = () => {
  return(
    <div className="navArea">
      <div className="optsArea">
        <Button withIcon>
          <PersonIcon />
          John Doe
        </Button>

        <Button withIcon>
          <AddIcon />
          Add New
        </Button>

        <Search />
      </div>

      <Nav />

      <style jsx>{`
        .navArea {
          display: grid;
          grid-template-columns: auto auto;
          padding: var(--s1) var(--s3);
          background: var(--bg-nav);
          margin-bottom: 1rem;
          gap: var(--s3);
          align-items: center;
        }

        .optsArea {
          display: grid;
          gap: var(--s3);
          justify-content: start;
          grid-template-columns: auto auto 1fr; 
        }

        @media (min-width: ${width.sm}) {
          .navArea {
            // 
          }

          .optsArea {
            // 
          }
        }

    `}</style>
    </div>
  )
}

export default NavArea 