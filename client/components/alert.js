function Alert(props) {
  return(
    <p>
      {props.children}
  
      <style jsx>{`
        background: ${props.theme};
      }

      `}</style>
    </p>
  )
}

export default Alert 