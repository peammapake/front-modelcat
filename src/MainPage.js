import { Link } from "react-router-dom";

const Main = ({ category }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("do something");
    }
  };

  return (
    <div className="categories">
      <input type="text" onKeyDown={handleSearch} placeholder="Search..." />
      {category.map((val, key) => {
        return (
          <div className="catlist" key={key}>
            <Link
              to={{
                pathname: "/detail",
                state: {
                  catDetail: val,
                },
              }}
            >
              <p>{val.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
