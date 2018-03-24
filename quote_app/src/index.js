import React from  'react';
import ReactDOM from 'react-dom';
import Quote from './Quote';
import 'tachyons'; 
import './index.css';

class App extends React.Component{
	render(){
		return (
		 <Quote/>
		);
	}
}

ReactDOM.render(<App/>,document.getElementById('quote'));
