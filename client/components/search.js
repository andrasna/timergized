const Search = () => {
  return(
    <>
      <form>
        <input type="search" id="mySearch" name="q" />
        <button>
          <span className="visuallyhidden">Search</span>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
        </button>
      </form>

      <style jsx>{`

        form {
          background-color: rgba(0, 0, 0, .15);  
          border-radius: .8rem;
          display: flex;
          align-items: center;
          padding: 0 .5rem;
          justify-content: flex-end;
        }

        form:focus-within {
          box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
        }

        input {
          border: 0;
          padding: .5rem;
          color: white;
          background: transparent;
          outline: none;
          width: calc(100% - 1rem);
        }

        button {
          background: transparent;
          border: 0;
          color: white;
          height: 1rem;
          width: 1rem;
          background-image: url(/svg/search-solid.svg);
          background-repeat: no-repeat;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Search