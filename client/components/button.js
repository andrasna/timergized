const Button = (props) => {
  return(
    <button className={'withBackground' in props && 'with-background' }>
      {props.children}

      <style jsx>{`
        button {
          border: 0;
          cursor: pointer;
          background-color: transparent; 
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .with-background {
          padding: var(--s1);
          min-width: 2.5rem;
          background: var(--bg-secondary);
          border-radius: var(--border-radius-primary);
        }
      `}</style>
    </button>
  )
}

export default Button

