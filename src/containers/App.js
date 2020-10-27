import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
// import {robots} from './robots';
// import logo from './logo.svg';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends Component {
  constructor () {
    super()
    this.state= {
      robots: [],
      serachbox: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      return response.json();
    })
    .then((users)=>{
      return this.setState({robots: users})
    })
  }
  onChangeValue=(event)=>{
    this.setState({serachbox: event.target.value})
    }
    
  
  render() {
    const {robots, serachbox} = this.state
    const filterRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(serachbox.toLowerCase());
    })
    return (!robots.length)? <h1>Loading</h1>:
    (
    <div className='tc'>
      <h1 className = 'f2'>RoboFriends</h1>
      <SearchBox searchChanged = {this.onChangeValue} serachbox={this.state.serachbox}/>
      <Scroll>
        <ErrorBoundary>
          <Cardlist robots= {filterRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>
    );
    
  }
}

export default App;
