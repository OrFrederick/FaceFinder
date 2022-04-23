import { Link } from 'react-router-dom';
function SearchResult(props: { title: JSX.Element; route: string }) {
  return (
    <div className="relative py-1 border border-t-0 ">
      <Link to={props.route}>
        <li>{props.title}</li>
      </Link>
    </div>
  );
}
export default SearchResult;
