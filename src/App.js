import './App.css';

import Header from './components/header';
import StatsPanel from './components/stats-panel';

import mock from './mocks/general-stats-mock';

function App() {
  const generalStats = mock;
  console.log(generalStats);
  console.log(generalStats.Global);

  return (
    <div className="App">
      <Header></Header>
      <StatsPanel title="Global" generalCoronaStats={generalStats.Global}></StatsPanel>
    </div>
  );
}

export default App;
