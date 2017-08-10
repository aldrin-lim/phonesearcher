import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import { autobind } from 'core-decorators';
import { createContainer } from 'meteor/react-meteor-data';
import PhoneUnits from '../../../models/PhoneUnits';

@autobind
class PhoneDetail extends Component {
  render() {
    return (
      <div className="phonedetails" className="uk-flex-center uk-text-center">
        {
          this.props.loading ? 
            <Spinner/>
          :
            <div>
              <i style={{fontSize: "8em"}} className="fa fa-mobile" aria-hidden="true"></i>
              <h1 className="uk-heading-line uk-text-center"><span>{this.props.phone.name}</span></h1>
              <p className="uk-text-muted">Available In:</p>
              <p> 
                {
                  this.props.phone.cases.map((item, i) => {
                     return (<label key={i} className="uk-width-1-1@m uk-width-1-5@m uk-width-1-5@l uk-button uk-button-default uk-margin-small-top uk-margin-small-left uk-margin-small-right">{item.type}</label>)
                  })
                } 
              </p>
            </div>
        }
      </div>
    );
  }
}
export default createContainer((props) => {
  let loading = Meteor.subscribe('phoneunits');
  let oid = new Meteor.Collection.ObjectID(props.params.id);
  return {
    "loading": !loading.ready(),
    "phone": PhoneUnits.findOne({"_id": oid})
  };
}, PhoneDetail);