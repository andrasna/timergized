import ProjectLink from './project-link'
import width from '../theme/width.js'

const ProjectList = () => {
  return(
    <ul>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>
      <li><ProjectLink /></li>

      <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
          gap: var(--s2);
          justify-content: center;
          max-width: ${width.xl};
          padding: 0 var(--s1);
          margin: 0 auto;
        }

        li {
          display: flex;
        }

        @media (min-width: ${width.xs}) {
          ul {
            grid-template-columns: repeat(auto-fit, minmax(11.5rem, auto));
            gap: var(--s3);
            padding: 0 var(--s3);
          }
        }
      `}</style>
    </ul>
  )
}

export default ProjectList
