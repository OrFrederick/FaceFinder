import { useEffect, useState } from 'react';
import { PersonIf } from '../Interfaces';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PeopleViewer() {
  const [people, setPeople] = useState<PersonIf[]>([]);
  const fetchPeople = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/people`).then((response) => {
      setPeople(response.data);
    });
  };

  useEffect(fetchPeople, []);
  return (
    <div className="w-fit m-auto">
      <thead>
        <tr className="w-auto">
          <th className="px-5">Name</th>
          <th className="px-5">Color</th>
        </tr>
      </thead>
      <tbody>
        {people.map((p: PersonIf) => (
          <tr>
            <td>
              <Link to={`/person/${p.id}`}>{p.name}</Link>
            </td>
            <td style={{ color: `#${p.color}` }}>#{p.color}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default PeopleViewer;
