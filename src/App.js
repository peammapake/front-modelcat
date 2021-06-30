import { useEffect, useState } from "react";
import "./App.css";
import ReactSearchBox from "react-search-box";
import CatList from "./CatList";

const App = () => {
  const url =
    "https://s3-ap-southeast-1.amazonaws.com/kiyo-development/test/categories.json";
  const [hasError, setError] = useState(false);
  const [category, setCat] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      res
        .json()
        .then((res) => setCat(res))
        .catch((err) => setError(err));
    }
    fetchData();
  });

  const lookIn = (id) =>{
    const tempCat = category.filter(cat => cat.id == id);
    
  }

  return (
    <div className="App">
      <CatList category={category} lookIn={lookIn}/>
    </div>
  );
};

export default App;
