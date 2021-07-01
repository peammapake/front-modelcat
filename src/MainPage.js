import { useState } from "react";
import { Link } from "react-router-dom";

const Main = ({ category }) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("do something");
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="categories">
      <div className="searchbox">
        <input
          type="text"
          onKeyDown={handleSearch}
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {category
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
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
