import React from 'react';
import ReactDOM from 'react-dom';
import Cow from './components/Cow.jsx';
import Search from './components/Search.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      cowData: [],
      displayName: 'Test',
      displayDesc: 'IsFat'
    }

    this.refreshPage = this.refreshPage.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  setDisplay (name, desc) {
    this.setState({displayName: name, displayDesc: desc});
  }
  refreshPage () {
    axios.get('/api/cows').
    then((cowData) => {
      this.setState({cowData: cowData.data});
    })
    .catch(function(err){
      console.log(err);
    })
  }

  componentDidMount() {
    this.refreshPage();
  }


  render () {
    return (
    <div>
      <h2>{this.state.displayName}</h2>
      <h1>{this.state.displayDesc}</h1>
      <Search refreshPage={this.refreshPage} />
      {this.state.cowData.map((cow) => {
        return <Cow setDisplay={this.setDisplay} cowName={cow.name} cowDesc={cow.text} />
      })}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));