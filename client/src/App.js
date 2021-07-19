import './App.css';
import Welcome from './components/Welcome';
import Home from "./components/Home"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Detail from './components/Detail';
import Tourist_Activity from './components/Tourist_Activity';
import NavBar from './components/NavBar';
import Activity from './components/Activity';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path="/"exact component={Welcome}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/activities" exact component={Activity} />
      <Route path="/home/:id" exact component={Detail}/>
      <Route path="/addActivity" exact component={Tourist_Activity}/>
 
    </div>
  );
}

export default App;
