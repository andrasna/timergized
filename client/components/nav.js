import Link from 'next/link'
import {useState} from 'react'
import width from '../theme/width.js'
import Overlay from '../components/overlay'

const Nav = () => {
  const [isOpen, setNavState] = useState(false)

  const toggleNavState = () => {
    return setNavState(!isOpen)
  }

  const desktopNavWidth = width.md

  return(
    <>
      <Overlay isActive={isOpen} toggler={toggleNavState} hideAboveWidth={desktopNavWidth} />

      <nav>
        <button aria-expanded={isOpen} onClick={toggleNavState}>

          <span className="visuallyhidden">Menu</span>

          <div className={isOpen ? 'lines open' : 'lines'}>
            <span className={isOpen ? 'line open' : 'line'}></span>
            <span className={isOpen ? 'line open' : 'line'}></span>
            <span className={isOpen ? 'line open' : 'line'}></span>
          </div>
        </button>

        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/clients"><a>Clients</a></Link></li>
          <li><Link href="/teams"><a>Teams</a></Link></li>
          <li><Link href="/reports"><a>Reports</a></Link></li>
        </ul>

      </nav>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: flex-end;
        }

        ul {
          flex-direction: column;
          display: flex;
          list-style: none;
          padding-left: 0;
          position: absolute;
          color: var(--text-secondary);
          background-color: var(--bg-light);
          border-radius: .4rem;
          padding: var(--s3);
          transition: opacity .2s ease;
        }

        a {
          display: block;
          padding: var(--s2);
        }

        button {
          border-radius: .3rem;
          z-index: 1;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .lines {
          display: grid;
          gap: 2px;
        }

        .line {
          transition: .2s ease;
          content: '';
          width: .8rem;
          height: 2px;
          background-color: var(--text-primary);
          border-radius: 4px;
        }

        @media (min-width: ${desktopNavWidth}) {
          nav {
            display: block;
          }

          ul {
            position: relative;
            display: flex !important;
            flex-direction: row;
            justify-content: flex-end;
            background-color: transparent;
            padding: initial;
            opacity: 1 !important;
            visibility: visible !important;
            position: relative !important;
          }

          a {
            padding-top: initial;
            padding-bottom: initial;
            color: var(--text-primary);
          }

          button {
            display: none;
          }
        }
    `}</style>

      <style jsx>{`
        button {
          background-color: ${isOpen ? 'transparent' : 'var(--bg-secondary)'};
        }

        ul {
          visibility: ${isOpen ? 'visible' : 'hidden'};
          opacity: ${isOpen ? '1' : '0'};
        }

        .open.lines {
          gap: 0;
        }

        .open.line {
          background: var(--bg-primary);
          transform-origin: center;
          grid-row-start: 1;
          grid-column-start: 1;
          transform: scale(160%) rotate(45deg);
        }
        
        .open.line:nth-child(3) {
          transform: scale(160%) rotate(-45deg);
        }
    `}</style>
    </>
  )
}

export default Nav