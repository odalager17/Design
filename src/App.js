import Prueba from "./components/Pruebas";
import Charts from "./components/Charts";

//Tec
import Home from "./components/Tec/Home";

//music
import Music from "./components/Music/Home";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { NoUserRoutes } from "./routeCheckers";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <NoUserRoutes exact path="/" component={Home} />
        </Switch>
        <Switch>
          <NoUserRoutes exact path="/Charts" component={Charts} />
        </Switch>
        <Switch>
          <NoUserRoutes exact path="/Music" component={Music} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
