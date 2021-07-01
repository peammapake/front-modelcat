import { Link } from "react-router-dom";

const Main = ({ category, lookIn }) => {
  return (
    <div className="cat-list">
      <div className="catList">
        {category.map((val, key) => {
          return (
            <div>
              <Link to={`/${val.id}`}>
                <p>{val.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
