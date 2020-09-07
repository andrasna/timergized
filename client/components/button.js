const Button = (props) => {
  return(
    <button className={'withIcon' in props && 'withIcon' }>
      {props.children}

      <style jsx>{`
        button {
          border: 0;
          cursor: pointer;
          background-color: transparent; 
          color: var(--text-primary);
        }

        .withIcon {
          display: flex;
          align-items: center;
        }
      `}</style>
    </button>
  )
}

export default Button

