import { Switch, Route } from "react-router-dom";
import Topnav from "./components/nav/Topnav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/nav/Footer";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import "antd/dist/antd.css";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <Topnav token={token} setToken={setToken} />
      </header>

      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login {...props} token={token} setToken={setToken} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup {...props} token={token} />}
        />
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} token={token} />}
        />
        <Route exact path="/product-list/:slug/:q" component={ProductList} />
        <Route exact path="/product-details/:slug" component={ProductDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
