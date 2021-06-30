const CatList = ({ category, lookIn }) => {
  return (
    <div className="cat-list">
      <div className="catList">
        {category.map((val, key) => {
          return (
            <div>
              <p>{val.name}</p>
              <button onClick={() => lookIn(val.id)}>look up</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatList;
