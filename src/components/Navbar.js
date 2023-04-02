import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="header">
      <div className="container d-flex">
        <Link to="/">
          <h1>BIT Show</h1>
        </Link>
        <form className="serachbox">
          <input type="text" placeholder="Search ..." className="searchbox" />
        </form>
      </div>
    </header>
  );
};
