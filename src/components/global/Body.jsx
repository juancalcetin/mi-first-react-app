/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Body extends Component {
  static Proptype = {
    content: PropTypes.object.isRequired,
  }
  render() {
    const {content} = this.props 
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Body;
