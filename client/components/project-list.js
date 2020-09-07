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
          grid-template-columns: repeat(auto-fit, minmax(11.5rem, auto));
          gap: var(--s3);
          justify-content: center;
          max-width: ${width.xl};
          padding: 0 var(--s3);
          margin: 0 auto;
        }
      `}</style>
    </ul>
  )
}

export default ProjectList
