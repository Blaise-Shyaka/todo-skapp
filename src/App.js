import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Tasks from './components/Tasks';
import CreateToDo from './components/CreateToDo';

// const todos = [
//   {
//     title: 'First Todo',
//     tasks: ['Take trash out', 'Make breakfast', 'Take kids to school'],
//   },
//   {
//     title: 'Second Todo',
//     tasks: ['Repair the phone', 'Take the cat to the vet', 'Take the dog outside'],
//   },
// ];

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
