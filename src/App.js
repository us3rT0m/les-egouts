import './App.css';
import Liste from './components/Liste';
import Canva from './components/Canva';

function App() {

  const listChange = (picture) => {
    
  }

  return (
    <div className="App flex grow justify-around w-100">
      <Canva />
      <Liste onChangePic={listChange} />
    </div>
  );
}

export default App;
