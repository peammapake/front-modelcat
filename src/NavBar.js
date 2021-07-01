import { Link } from "react-router-dom";

const Navbar = () => {
  const handleGoHome = () => {
    console.log("go home");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("do something");
    }
  };

  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/" onClick={handleGoHome}>
          Home
        </Link>
        <input type="text" onKeyDown={handleSearch} placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;
