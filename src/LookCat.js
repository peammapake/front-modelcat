import { useParams } from "react-router-dom";

const LookCat = () => {
  const { id } = useParams();

  return (
    <div className="cat-details">
      <h2>Category Detail</h2>
    </div>
  );
};

export default LookCat;
