import {React,Component} from 'react'
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Background from './Components/Background/Background';

class App extends Component  {
  constructor(){
    super();
    this.state={
      route :'home'
    }
  }
  onRouteChange=(route)=>{
    this.setState({route:route});
  }
  render(){
  return (
    <div>
    <Background/>
    <Navigation onRouteChange={this.onRouteChange}/>
    {this.state.route==='home' ?
     <Home  />
     : (this.state.route==='about')?
        <About/>
        :
        <Projects/> 
      }
     </div>
  );
}
}

export default App;
