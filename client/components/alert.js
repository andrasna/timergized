const Alert = (props) => {
  return(
      <p>
        {props.children}

        <style jsx>{`
          p {
            padding: var(--s2);
            background-color: var(--bg-info-${props.type});
          }
        `}</style>
      </p>
  )
}

export default Alert 