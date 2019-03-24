import React from 'react';
const axios = require('axios');

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }

    this.setState = this.setState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newCow = {name: this.state.name, description: this.state.description};
    axios.post('/api/cows', newCow)
      .then((res) => {
        this.props.refreshPage();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Cow name" onChange={this.handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Search;