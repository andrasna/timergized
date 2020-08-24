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
        <li><Link href="/settings"><a>Settings</a></Link></li>
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding-left: 0;
          justify-content: space-around;
        }

        li {
          margin-left: 3rem;
        }

        a {
          opacity: .8;
        }

        a:hover {
          opacity: 1;
        }

      `}</style>
    </nav>
  )
}

export default Nav