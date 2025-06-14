import { Switch, Route } from 'react-router-dom';
import routes from './unsorted/route';
function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route, i) => (
          <Route key={route.name} path={route.path} exact>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
