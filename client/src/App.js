import './App.css';
import Welcome from './components/Welcome';
import Home from "./components/Home"
import {Route} from "react-router-dom"
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Route path="/"exact component={Welcome}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/home/:id" component={Detail}/> 
    </div>
  );
}

export default App;
