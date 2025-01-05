/** Read about the code below, achieving that make input element in “SearchInput” to be
focused while search button on click **/
/**Code block start 
function SearchButton() {
  return (
  <button> Search </button>
  );
  }
  function SearchInput() {
  return (
  <input/>
  );
  }
  export default function Page() {
  return (
  <>
  <nav>
  <SearchButton />
  </nav>
  <SearchInput />
  </>
  );
  }
Code block end **/

/**
 回答:
 import { useRef } from 'react';

function SearchButton({ onClick }) {
  return (
    <button onClick={onClick}> Search </button>
  );
}

function SearchInput({ inputRef }) {
  return (
    <input ref={inputRef} />
  );
}

export default function Page() {
  const inputRef = useRef(null);
  const handleSearchClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <nav>
        <SearchButton onClick={handleSearchClick} />
      </nav>
      <SearchInput inputRef={inputRef} />
    </>
  );
}
 */
