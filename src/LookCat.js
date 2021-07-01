import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const LookCat = () => {
  const location = useLocation();
  const { catDetail } = location.state;

  return (
    <div className="cat-details">
      <h2>Category Detail</h2>
      <div>
        <br />
        <p>Name: {catDetail.name}</p>
        <p>Label: {catDetail.label} </p>
        <p>ID: {catDetail.id}</p>
        <br />
        <div className="sub-categories">
          <h3>Subcategories</h3>
          {catDetail.subcategories !== undefined
            ? catDetail.subcategories.map((val, key) => {
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
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default LookCat;
