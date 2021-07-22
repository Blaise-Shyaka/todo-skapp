import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Tasks from './components/Tasks';
import CreateToDo from './components/CreateToDo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/todos" exact>
          <CreateToDo />
          <Tasks />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
