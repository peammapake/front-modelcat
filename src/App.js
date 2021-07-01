import "./index.css";
import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import Main from "./MainPage";
import LookCat from "./LookCat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const url =
    "https://s3-ap-southeast-1.amazonaws.com/kiyo-development/test/categories.json";
  const [hasError, setError] = useState(false);
  const [category, setCat] = useState([]);

  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then((res) => setCat(res))
      .catch((err) => setError(err));
  }

  useEffect(() => {
    fetchData();
    console.log("I ran");
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Main category={category} />
            </Route>
            <Route exact path="/detail">
              <LookCat />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
