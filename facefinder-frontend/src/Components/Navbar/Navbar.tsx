import { Outlet, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const navlinks = [
  {
    route: '/',
    title: 'Videos',
  },
  {
    route: '/detections',
    title: 'Detections',
  },
  {
    route: '/people',
    title: 'People',
  },
];

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="bg-gray-800">
        <div className="w-1/2 m-auto">
          <ul className="flex flex-row justify-evenly h-10">
            {navlinks.map((l, id) => (
              <li
                key={id}
                className={
                  (location.pathname === l.route
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white') +
                  ' px-3 py-2 rounded-md text-sm font-medium'
                }
              >
                <Link to={l.route}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
