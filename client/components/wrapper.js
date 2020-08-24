const Wrapper = (props) => {
  return(
    <div>
      {props.children}

      <style jsx>{`
        max-width: ${props.theme};
        margin: 0 auto;
        padding: 0 1.5rem;
      `}</style>
    </div>
  )
}

export default Wrapper