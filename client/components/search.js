import SearchIcon from '@material-ui/icons/Search'

const Search = () => {
  return(
    <form>
      <input placeholder="Search..." type="search" id="mySearch" name="q" />
      <button>
        <span className="visuallyhidden">Search</span>
        <SearchIcon style={{'fontSize': '1.3rem'}} />
      </button>


      <style jsx>{`
        form {
          
          background-color: var(--bg-secondary);
          border-radius: var(--border-radius-primary);
          display: flex;
          width: 100%;
          max-width: 18rem;
          transition: .2s ease;
        }

        form:focus-within {
          box-shadow: 0 0 .5rem var(--box-shadow-primary);
          max-width: 24rem;
        }

        input {
          border: 0;
          padding: .4rem 0 .4rem var(--s2);
          color: var(--text-primary);
          background: var(--bg-input);
          outline: none;
          border-radius: var(--border-radius-primary) 0 0 var(--border-radius-primary);
          width: calc(100% - 2rem);
        }

        button {
          display: flex;
          align-items: center;
          margin: 0 auto;
          border: 0;
          cursor: pointer;
          border-radius: 0 var(--border-radius-primary) var(--border-radius-primary) 0;
          background: var(--bg-secondary);
          padding: 0 var(--s1);
          color: var(--text-primary);
        }
      `}</style>
    </form>
  )
}

export default Search