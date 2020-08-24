import Link from 'next/link'

const Nav = () => {
  return(
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/projects"><a>Projects</a></Link></li>
        <li><Link href="/clients"><a>Clients</a></Link></li>
        <li><Link href="/teams"><a>Teams</a></Link></li>
        <li><Link href="/reports"><a>Reports</a></Link></li>
      </ul>

      <style jsx>{`
        ul {
          display: grid;
          list-style: none;
          padding-left: 0;
          column-gap: 3rem;
          justify-content: end;
          grid-template-columns: repeat(auto-fit, minmax(0, auto));
        }
      `}</style>
    </nav>
  )
}

export default Nav