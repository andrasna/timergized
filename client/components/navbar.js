import Link from 'next/link'
import Nav from './nav'
import Search from './search'

const Navbar = (props) => {
  return(
    <div style={{
        display: 'grid',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem 0',
        gridTemplateColumns: 'auto auto',
      }}>

      <div style={{
        display: 'grid',
        alignItems: "center",
        gap: '2rem',
        justifyContent: 'start',
        gridTemplateColumns: 'repeat(auto-fit, minmax(0, auto))',
      }}>
      
      <Link href="/">
        <a>
          <h1 style={{fontSize: '1.5rem'}}>Timergized</h1>      
        </a>
      </Link>

        <button>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
          <p>John Doe</p>
        </button>

        <button>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          <p>New project</p>
        </button>

        <Search />
      </div>

      <Nav />
  
      {props.children}

      <style jsx>{`
        button {
          border: 0;
          cursor: pointer;
          background-color: transparent; 
          display: flex;
          align-items: center;
          color: white;
        }

        p {
          margin-left: .4rem;
        }
      `}</style>
    </div>
  )
}

export default Navbar 