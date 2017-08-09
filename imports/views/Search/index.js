/**
 * @author Aldrin Lim
 * Search Component
 */

import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import PhoneUnits from '../../../models/PhoneUnits';
import { setPhoneUnitList } from '../../actions';

@autobind
class SearchPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchlist: []
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.phones
    });
  }

  /**
   * Event handler for the input
   * Get the data from the input and show all matching result from the database
   * @param {any} e 
   * @memberof SearchPhone
   */
  search(e){
    const value = e.target.value;
    let result = this.state.data.filter((item) => {
      if(item.name.toLowerCase().includes(value.toLowerCase()) || item.brand.toLowerCase().includes(value.toLowerCase())){
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      searchlist: result.slice(0,5)
    })
  }
  render() {
    if(!this.props.loading){
      return ( <div className="uk-card uk-card-default uk-card-body uk-margin uk uk-height-1-1"> LOADING ...</div>)
    }
    return (
      <div className="uk-card uk-card-default uk-card-body uk-margin uk uk-height-1-1">
        <div className="uk-placeholder uk-text-center">Search your Phone here <br /> <i className="fa fa-arrow-down" aria-hidden="true"></i></div>
        <span data-uk-search-icon></span>
        <input onChange={this.search} className="uk-input  uk-width-1-1" type="search" placeholder="Search Phone Unit..." autoFocus />
        {
          this.state.searchlist.length > 0 && 
          <ul id="phonelist" className="uk-list uk-list-divider">
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

/**
 * Redux State as Props
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    redux: state
  };
};

/**
 * Redux action as Props
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    setPhoneUnitList: args => dispatch(setPhoneUnitList)
  };
};

// Wraps the React Redux into the component
const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)(SearchPhone);


// Wraps the meteor createContainer into the ReduxWrapper
export default createContainer(() => {
  let loading = Meteor.subscribe('phoneunits');
  return {
    "loading": loading.ready(),
    "phones": PhoneUnits.find().fetch()
  };
}, ReduxWrapper);