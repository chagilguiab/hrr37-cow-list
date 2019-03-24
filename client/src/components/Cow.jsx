import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.cowName,
      desc: this.props.cowDesc
    }
  }

  render() {
    return (
    <div onClick={()=> this.props.setDisplay(this.state.name, this.state.desc)}>
    <h1>{this.props.cowName}</h1>
    </div>
    )
  }
}

export default Cow;