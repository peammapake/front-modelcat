import { Link } from "react-router-dom";

const Main = ({ category, lookIn }) => {
  return (
    <div className="categories">
      {category.map((val, key) => {
        return (
          <div className="catlist">
            <Link to={`/${val.id}`}>
              <p>{val.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
