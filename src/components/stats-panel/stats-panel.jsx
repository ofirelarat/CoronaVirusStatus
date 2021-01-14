import {Container} from '@material-ui/core'
import './stats-panel.css';

function StatsPanel({title,generalCoronaStats}) {
    console.log(generalCoronaStats)

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <div className="stats-panel">
        <div className="stats-title">{title}</div>
        <div className="stats-container">
            <Container className="stat-container">
                <div className="title">New Confirmed</div>
                <div className="value">
                    {numberWithCommas(generalCoronaStats.NewConfirmed)}
                </div>
            </Container>
            <Container className="stat-container">
                <div className="title">Total Confirmed</div>
                <div className="value">
                    {numberWithCommas(generalCoronaStats.TotalConfirmed)}
                </div>
            </Container>
            <Container className="stat-container">
                <div className="title">New Deaths</div>
                <div className="value">
                    {numberWithCommas(generalCoronaStats.NewDeaths)}
                </div>
            </Container>
            <Container className="stat-container">
                <div className="title">Total Deaths</div>
                <div className="value">
                    {numberWithCommas(generalCoronaStats.TotalDeaths)}
                </div>
            </Container>
        </div>
        {
            generalCoronaStats.Date ?
                <div className="correct-date">correct to: {generalCoronaStats.Date}</div>
                : <></>
        }   
      </div>
    );
  }
  
  export default StatsPanel;