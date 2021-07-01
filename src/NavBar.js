import { Link } from "react-router-dom";

const Navbar = () => {
  const handleGoHome = () => {
    
  };

  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/" onClick={handleGoHome}>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
