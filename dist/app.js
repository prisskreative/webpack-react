var React = require('react');
var ReactDOM = require('react-dom');


class App extends React.Component {
	constructor(){
		super();
		this.state = {title: "Webpack!!!"}
	}
	render() {
		return <div>My {this.state.title} cool App</div>
	}
}

ReactDOM.render(<App />, document.getElementById('react-container'))