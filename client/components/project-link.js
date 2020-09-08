import Link from 'next/link'
import StarIcon from '@material-ui/icons/Star'
import EditIcon from '@material-ui/icons/Edit'
import width from '../theme/width.js'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}


const ProjectLink = () => {
  return(
    <Link href="/">
      <a>
        <div className="image" style={{backgroundImage: `url('https://source.unsplash.com/random/288x288/?sig=${getRandomInt(1, 10000)}')`}}></div>
        <div className="details">
          <div>
            <p className="title">Sequi ab eaque incidunt et. Voluptatem deserunt</p>
            <p className="time-spent">2d 20h 32m</p>
          </div>
          <div className="icons">
            <EditIcon />
            <StarIcon />
          </div>
        </div>

        <style jsx>{`
          a {
            background: var(--bg-card);
            width: 10rem;
            display: flex;
            flex-direction: column;
            padding: var(--s2);
            border-radius: .5rem;
            box-shadow: 0 3px 3px var(--box-shadow-primary);
          }
          
          .image {
            width: 100%;
            height: 7rem;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: var(--s1);
          }
          
          .details {
            display: flex;
          }
          
          .title {
            margin-bottom: var(--s1);
            font-weight: 500;
            margin-right: .5rem;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            font-size: 1.15rem;
          }
          
          .time-spent {
            margin-bottom: 0;
            font-weight: 310;
          }
          
          .icons {
            display: grid;
            gap: .6rem;
            grid-template-rows: 1fr 1fr;
            align-items: flex-end;
          }

          @media (min-width: ${width.xs}) {
            a {
              width: 12rem;
            }
          }
        `}</style>
      </a>
    </Link>
  )
}

export default ProjectLink
