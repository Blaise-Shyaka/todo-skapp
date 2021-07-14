import Login from './components/Login';
import Tasks from './components/Tasks';
import CreateToDo from './components/CreateToDo';

const todos = [
  {
    title: 'First Todo',
    tasks: ['Take trash out', 'Make breakfast', 'Take kids to school'],
  },
  {
    title: 'Second Todo',
    tasks: ['Repair the phone', 'Take the cat to the vet', 'Take the dog outside'],
  },
];

function App() {
  return (
    <div className="App">
      <Login />
      <CreateToDo />
      <Tasks todos={todos} />
    </div>
  );
}

export default App;
