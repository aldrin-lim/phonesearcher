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
import Spinner from '../../components/Spinner';
import Card from '../../components/Card';
import DropdownSearch from '../../components/DropdownSearch';
@autobind
class SearchPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.phones,
      searchlist: [],
      loading: props.loading
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.phones,
      loading: nextProps.loading
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
      searchlist: value.length > 0 ? result.slice(0,5) : []
    })
  }

  
  render() {
    if(this.state.loading){
      return (<Spinner/>)
    }
    return (
      <div>
        <span data-uk-search-icon></span>
        <DropdownSearch onChange={this.search} searchlist={this.state.searchlist} />
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
    "loading": !loading.ready(),
    "phones": PhoneUnits.find().fetch()
  };
}, ReduxWrapper);