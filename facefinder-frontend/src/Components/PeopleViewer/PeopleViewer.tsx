import { useEffect, useState } from 'react';
import { PersonIf } from '../Interfaces';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Searchbar from '../Global/Searchbar/Searchbar';
import LoadingSpinner from '../Global/LoadingSpinner/LoadingSpinner';

function PeopleViewer() {
  const [people, setPeople] = useState<PersonIf[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPeople = () => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_URL}/people`).then((response) => {
      setPeople(response.data);
      setLoading(false);
    });
  };

  const handleSearch = (query: string) => {
    if (query.length > 0) {
      let results = people.filter((person) => {
        return person.name.toLowerCase().match(query.toLowerCase());
      });
      return results.map((r, i) => ({
        key: i,
        title: <p style={{ color: `#${r.color}` }}>{r.name}</p>,
        route: `/video/${r.id}`,
      }));
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!people || people?.length === 0) {
    return (
      <h1 className="w-fit h-fit m-auto text-5xl mt-72">
        Couldnt find any People
      </h1>
    );
  }

  return (
    <div className="w-1/3 m-auto">
      <Searchbar
        className="w-full m-auto mt-2 text-xl"
        className2="p-5"
        handleSearch={handleSearch}
      />
      <table className="m-auto">
        <thead>
          <tr className="w-auto">
            <th className="px-5">Name</th>
            <th className="px-5">Color</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p: PersonIf, i) => (
            <tr key={i}>
              <td>
                <Link to={`/person/${p.id}`}>{p.name}</Link>
              </td>
              <td style={{ color: `#${p.color}` }}>#{p.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleViewer;
