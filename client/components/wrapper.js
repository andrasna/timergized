const Wrapper = (props) => {
  return(
    <div>
      {props.children}

      <style jsx>{`
        max-width: ${props.theme};
        margin: 0 auto;
      `}</style>
    </div>
  )
}

export default Wrapper