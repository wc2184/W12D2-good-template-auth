import { useSelector } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";


function App() {
const currentUser = useSelector(state => state.session.user);

let routes = (
  <Switch>
    <Route exact path="/">
      <Link to="/login">
        <h2>Home exact path /</h2>
      </Link>
    </Route>

    <Route path="/login">
      {!currentUser ? <LoginFormPage /> : <Redirect to="/" />}
    </Route>


  </Switch>
)
  return (
    <div>
      {routes}
    </div>

  );
}

export default App;
