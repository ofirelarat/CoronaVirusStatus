import {Container} from '@material-ui/core'
import './stats-panel.css';

function StatsPanel({title,generalCoronaStats}) {
    console.log(generalCoronaStats)
    return (
      <Container className="stats-panel">
        {title}
        <div className="stats-container">
            <Container className="stat-container">
                <div className="title">New Confirmed</div>
                <div className="value">{generalCoronaStats.NewConfirmed}</div>
            </Container>
            <Container className="stat-container">
                <div className="title">Total Confirmed</div>
                <div className="value">{generalCoronaStats.TotalConfirmed}</div>
            </Container>
            <Container className="stat-container">
                <div className="title">New Deaths</div>
                <div className="value">{generalCoronaStats.NewDeaths}</div>
            </Container>
            <Container className="stat-container">
                <div className="title">Total Deaths</div>
                <div className="value">{generalCoronaStats.TotalDeaths}</div>
            </Container>
        </div>
      </Container>
    );
  }
  
  export default StatsPanel;