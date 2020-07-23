// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = event => {
    event.persist();
    this.props.onDelayedClick(event, event.delay)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delayed Button</button>
      </div>
    )
  }

}