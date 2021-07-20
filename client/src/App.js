import './App.css';
import Welcome from './components/Welcome';
import { Route } from "react-router-dom"
import Detail from './components/Detail';
import Tourist_Activity from './components/Tourist_Activity';
import NavBar from './components/NavBar';
import Activity from './components/Activity';
import Countries from './components/Countries';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route path="/home" component={NavBar}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/"exact component={Welcome}/>
      <Route path="/home/countries" exact component={Countries}/>
      <Route path="/home/activities" exact component={Activity} />
      <Route path="/home/countries/:id" exact component={Detail}/>
      <Route path="/home/activities/addActivity" exact component={Tourist_Activity}/>
 
    </div>
  );
}

export default App;
