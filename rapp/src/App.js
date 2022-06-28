import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/product/:product_id" component={ProductDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
