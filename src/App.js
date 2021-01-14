import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';

import './App.css';

import Header from './components/header';
import StatsPanel from './components/stats-panel';

// import mock from './mocks/general-stats-mock';
import {getSammaryData, getAllCountries} from './api/general-stats';

function  App() {

  const [generalStats, setGeneralStats] = useState(undefined);
  const [allCountries, setAllCountries] = useState([]);
  const [pickedCountry, setPickedCountry] = useState('Israel');

  useEffect(() => {
    async function loadData() {
      const generalStatsData = await getSammaryData();
      setGeneralStats(generalStatsData);
      console.log(generalStats);
      
      const allCountriesData = await getAllCountries();
      setAllCountries(allCountriesData);
      console.log(allCountries);
    }
    
    loadData();
  }, []);

  const onChangeCountry = (event,child) => {
    setPickedCountry(event.target.value);
  };

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
        <div>
          <Select
            native
            value={pickedCountry}
            onChange={onChangeCountry}
          >
            {generalStats ? generalStats.Countries.map((country) => 
              <option>{country.Country}</option>
            )
            : <></>}
          </Select>
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
    </div>
  );
}

export default App;
