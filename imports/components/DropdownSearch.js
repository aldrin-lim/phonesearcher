import React, { Component } from 'react';

class DropdownSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchlist: props.searchlist
    }
    console.log(props)
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      searchlist: nextProps.searchlist
    });
  }
  render() {
    return (
      <div>
         <input onChange={this.props.onChange} className="uk-input  uk-width-1-1" type="search" placeholder="Search Phone Unit..." autoFocus />
          {
            this.state.searchlist.length > 0 && 
            <ul className="uk-list uk-list-divider phonelist">
              {
                this.state.searchlist.map((item, key) => {
                  return (
                    <li key={key}>
                      <a href="#">
                        <span>{item.brand}</span>
                        <span>{item.name}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          }
      </div>
    );
  }
}

export default DropdownSearch;