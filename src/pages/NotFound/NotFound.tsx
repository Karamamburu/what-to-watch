import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <>
        <p>404 not found</p>
        <Link to="/">Go to main page</Link>
    </>
  );
}

export default NotFound;
