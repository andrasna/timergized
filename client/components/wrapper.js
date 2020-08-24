const Wrapper = (props) => {
  return(
    <div>
      {props.children}

      <style jsx>{`
        max-width: ${props.theme || '100%'};
        margin: 0 auto;
        padding: 0 2rem;
      `}</style>
    </div>
  )
}

export default Wrapper