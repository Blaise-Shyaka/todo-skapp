import Login from './components/Login';
import Tasks from './components/Tasks';
import CreateToDo from './components/CreateToDo';

function App() {
  return (
    <div className="App">
      <Login />
      <CreateToDo />
      <Tasks todos={[]} />
    </div>
  );
}

export default App;
