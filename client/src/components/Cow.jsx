import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
    <h1>{this.props.cowName}</h1>
    </div>
    )
  }
}

export default Cow;