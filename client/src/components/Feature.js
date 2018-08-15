import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <div>Feature in the town!</div>;
  }
}

export default requireAuth(Feature);
