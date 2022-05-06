import { useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import './App.css';
import { UserData } from './Data';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ['red', 'blue'],
      borderColor: 'black',
      borderWidth: 2

    }]
  });

  return (
    <div className="App">
      <div style={{ width: 600 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 600 }}>

        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 600 }}>
        <PieChart chartData={userData} />
      </div>
    </div >
  );
}

export default App;
