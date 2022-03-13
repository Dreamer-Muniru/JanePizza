import './App.css'

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
