import Nav from './nav'
import Search from './search'

const Navbar = (props) => {
  return(
    <div>
      <Search />
      <Nav />
  
      {props.children}

      <style jsx>{`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 0;
      `}</style>
    </div>
  )
}

export default Navbar 