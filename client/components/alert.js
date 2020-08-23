const Alert = (props) => {
  return(
    <p>
      {props.children}
  
      <style jsx>{`
        background: ${props.theme};
        padding: 1rem;
      `}</style>
    </p>
  )
}

export default Alert 