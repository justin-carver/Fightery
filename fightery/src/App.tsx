import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import CreateTeam from './components/CreateTeam';
import FighteryOptions from './components/FighteryOptions';

const App = () => {
  const [enableFighteryOptions, setEnableFighteryOptions] = useState(false);
  return (
    // TODO: This needs to be converted into a Header component.
    <div className='App flex flex-col items-center dark:text-white dark:bg-dark-mode-base min-h-screen'>
      <Navigation />
      <CreateTeam enableFighteryOptions={setEnableFighteryOptions}/>
      {enableFighteryOptions ? <svg xmlns="http://www.w3.org/2000/svg" className="down-arrow" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
        </svg> : null}
      <FighteryOptions enableComponent={enableFighteryOptions} />
    </div>
  );
}

export default App;
