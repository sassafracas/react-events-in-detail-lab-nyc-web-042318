import React from "react";

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Delayed</button>
    )
  }
}
