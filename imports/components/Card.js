import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="uk-card uk-card-default uk-card-body uk-margin uk uk-height-1-1">
        {this.props.children}
      </div>
    );
  }
}

export default Card;