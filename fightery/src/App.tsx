import { useState } from 'react';
import './App.css';
import CreateTeam from './components/CreateTeam';
import FighteryOptions from './components/FighteryOptions';

const App = () => {
  const [enableFighteryOptions, setEnableFighteryOptions] = useState(false);
  const navStyle = "transform transition opacity-50 hover:opacity-100 hover:ease-in xsm:text-md";
  return (
    // TODO: This needs to be converted into a Header component.
    <div className='App flex flex-col items-center dark:text-white dark:bg-dark-mode-base min-h-screen'>
      <h1 className="App__logo flex sm:flex-row md:flex-row mt-10">
        <span className={navStyle}><a href="#">Welcome</a></span>
        <span className={navStyle}><a href="#">About</a></span>
        <div className="inline md:text-5xl md:tracking-wider md:ml-20 md:mr-20">The Fightery</div>
        <span className={navStyle}><a href="#">Contact</a></span>
        <span className={navStyle}><a href="#">Source</a></span>
      </h1>
      <CreateTeam enableFighteryOptions={setEnableFighteryOptions}/>
      <FighteryOptions enableComponent={enableFighteryOptions} />
    </div>
  );
}

export default App;
