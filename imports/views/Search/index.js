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
      data: [],
      searchlist: [],
      loading: true
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

  createNewPhone(){
    let data = {
        "brand": "Apple",
        "name": "iPhone 4",
        "cases": [
            {
                "type": "Hard Case",
                "options": [
                    "Pink",
                    "Red",
                    "Orange",
                    "Green",
                    "Sky Blue",
                    "Clear",
                    "Black",
                    "White"
                ]
            },
            {
                "type": "Rubber Case",
                "options": [
                    "Black",
                    "White",
                    "Clear"
                ]
            },
            {
                "type": "3D Case",
                "options": [
                    "Matte",
                    "Glossy"
                ]
            }
        ]
    }
    this.setState({ loading: true }, () => {
      Meteor.call("createPhoneUnits",data, (error, result) => {
        if(error){
          console.error(error);
        } else {
          console.log(result);
        }
        this.setState({
          loading: false
        });
      })
    });
    
  }
  render() {
    if(this.state.loading){
      return (<Spinner/>)
    }
    return (
      <Card>
        <div className="uk-placeholder uk-text-center">Search your Phone here <br /> <i className="fa fa-arrow-down" aria-hidden="true"></i></div>
        <span data-uk-search-icon></span>
        <button onClick={this.createNewPhone}> Create </button>
        <DropdownSearch onChange={this.search} searchlist={this.state.searchlist} />
      </Card>
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