import './App.css';
import Liste from './components/Liste';
import Canva from './components/Canva';

function App() {
  return (
    <div className="App flex grow justify-around w-100">
      <Canva />
      <Liste />
    </div>
  );
}

export default App;
