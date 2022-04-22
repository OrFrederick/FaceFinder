import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PersonIf } from '../Interfaces/VideoIf';
import axios from 'axios';
import { SketchPicker } from 'react-color';

function PersonDetail() {
  const params = useParams();
  const [person, setPerson] = useState<PersonIf>();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const fetchPerson = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/people/${params.id}`)
      .then((response) => {
        setPerson(response.data);
      });
  };

  const handleChange = (c: any, e: any) => {
    setPerson((p: any) => ({
      ...p,
      color: c.hex.replace('#', ''),
    }));
  };

  const handleSave = () => {
    axios.patch(`${process.env.REACT_APP_API_URL}/people/${person?.id}`, {
      color: person?.color,
    });
    setShowMessage(true);
    const timeId = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  };

  useEffect(fetchPerson, [params.id]);

  return (
    <div className="">
      {showMessage && (
        <div className="w-fit h-fit absolute top-0 right-1/2 translate-x-1/2 text-white text-2xl bg-green-500 border border-green-600 p-10 rounded animate-fade-in-down">
          Saved successfully
        </div>
      )}
      <div className="w-fit h-fit m-auto flex flex-col mt-52">
        <h1 className="text-8xl" style={{ color: `#${person?.color}` }}>
          {person?.name}
        </h1>
        <h2
          className="text-3xl"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          #{person?.color}
        </h2>
        {showColorPicker && (
          <div className="relative">
            <SketchPicker
              className="ml-28"
              color={person?.color}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <button
        onClick={handleSave}
        className="mt-4 bg-gray-200 rounded border border-gray-300 p-2"
      >
        Save
      </button>
    </div>
  );
}

export default PersonDetail;
