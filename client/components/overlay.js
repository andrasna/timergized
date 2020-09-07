const Overlay = (props) => {
  return(
    <div onClick={props.toggler}>
      <style jsx>{`
        div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--bg-overlay);
          transition: opacity .2s ease;
        }

        @media (min-width: ${props.hideAboveWidth}) {
          div {
            visibility: hidden !important; 
            opacity: 0 !important; 
          }
        }
      `}</style>

      <style jsx>{`
        div {
          visibility: ${props.isActive ? 'visible' : 'hidden'};
          opacity: ${props.isActive ? '1' : '0'};
        }
      `}</style>
    </div>
  )
}

export default Overlay 