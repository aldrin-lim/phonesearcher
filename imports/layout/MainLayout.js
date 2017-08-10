/**
 * @author Aldrin Lim
 * Main layout for the App
 */

import React, { Component } from 'react';
import Card from '../components/Card';
class MainLayout extends Component {
    render() {
      return (
        <div style={{backgroundColor: "#e4a8aa", height: "100vh"}} className="uk-container-expand uk-padding uk-height-large">
          <Card>{this.props.children}</Card>
        </div> );
    }
}

export default MainLayout;