import './App.css';
import CreateTeam from './components/CreateTeam';

function App() {
  return (
    <div className='App flex flex-col items-center dark:text-white dark:bg-stone-700 min-h-screen'>
      <CreateTeam />
    </div>
  );
}

export default App;
