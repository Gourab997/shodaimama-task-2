import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
