import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css';
// STATE- 
// an object that describes your application
// it can change and affect the app
	

class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		robots: [],
		searchfield: ''
  	}
  }

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users => {this.setState({robots: users})});
}



  // create random function
  onSearchChange = (event) => {
  	this.setState({searchfield: event.target.value})
  }

	render() {
		const {robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
  		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  	})
	return !robots.length ?
	<h1>Loading</h1> :
	 (
		<div className= 'tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots = {filteredRobots} />
		</Scroll>
		</div>
      );
	}
  }


export default App;

















// import logo from './logo.svg';
// import './App.css';
// import React, {Component} from 'react';

// class App extends Component {
//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//        {/*{ <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>}*/}
//     </div>
//    );
//   }
// }

// export default App;

