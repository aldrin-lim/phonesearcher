import React, { Component } from 'react';

class MainLayout extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#e4a8aa", height: "100vh"}} className="uk-container-expand uk-padding uk-height-large">
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;