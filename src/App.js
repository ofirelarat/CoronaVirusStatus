import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/header';
import StatsPanel from './components/stats-panel';

// import mock from './mocks/general-stats-mock';
import {getSammaryData} from './api/general-stats';

function  App() {

  const [generalStats, setGeneralStats] = useState(undefined);
  const [pickedCountry, setPickedCountry] = useState('Israel');

  useEffect(() => {
    async function loadData() {
      const generalStatsData = await getSammaryData();
      setGeneralStats(generalStatsData);
      console.log(generalStats);
    }
    
    loadData();
  }, []);

  // const generalStats = mock;

  return (
    <div className="App">
      <Header></Header>
      <div className="stats-container-main">
        {
          generalStats && generalStats.Global ? 
          <StatsPanel title="Global" generalCoronaStats={generalStats.Global}></StatsPanel>
          : <></>
        }
        <div className="seperator"></div>
        {
          generalStats && pickedCountry ? 
            <StatsPanel 
              title={pickedCountry}
              generalCoronaStats={generalStats.Countries.find(
                                    (x) => x.Country === pickedCountry)}>
            </StatsPanel>
          : <></>
        }
      </div>
    </div>
  );
}

export default App;
