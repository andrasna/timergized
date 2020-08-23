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
      `}</style>
    </div>
  )
}

export default Navbar 