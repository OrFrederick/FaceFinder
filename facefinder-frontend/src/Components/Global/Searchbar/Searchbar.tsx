import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ChangeEvent, useState } from 'react';
import SearchResult from './SearchResult';

function Searchbar(props: {
  className: string;
  className2: string;
  handleSearch: Function;
}) {
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchResults(props.handleSearch(e.target.value));
  };
  return (
    <div className={`${props.className}`}>
      <div
        className={`flex flex-row border border-gray-300 rounded w-full ${props.className2}`}
      >
        <FontAwesomeIcon
          className="mr-2 mt-1"
          icon={solid('magnifying-glass')}
        />
        <input
          type="text"
          className="border-0 outline-none"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      {searchResults && searchResults.length > 0 && (
        <ol className="absolute bg-white z-10 flex flex-col left-1/2 -translate-x-1/2 w-1/3 h-[49vh] overflow-y-auto">
          {searchResults.map(
            (r: { key: number; title: JSX.Element; route: string }) => (
              <SearchResult key={r.key} title={r.title} route={r.route} />
            )
          )}
        </ol>
      )}
    </div>
  );
}

export default Searchbar;
