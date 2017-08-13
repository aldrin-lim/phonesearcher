import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PhoneUnits from '../../../models/PhoneUnits';
import Spinner from '../../components/Spinner';
import { browserHistory } from 'react-router';
@autobind
class AddPhone extends Component {
  constructor(props){
    super(props);
    this.state = {
      brands: [
        undefined,
        "APPLE",
        "ASUS",
        "BLACKBERRY",
        "HTC",
        "HUAWEI",
        "LG",
        "LENOVO",
        "MEIZU",
        "NOKIA",
        "OPPO",
        "GOOGLE NEXUS",
        "SAMSUNG",
        "SONY",
        "VIVO",
        "XIAOMI",
      ],
      inputData: {},
      loading: false
    };
  }

  getValue(e){
    let object = {};
    let name = e.target.getAttribute("name");
    let value = e.target.value;
    if(e.target.getAttribute("type") === "checkbox"){
      object[name] = e.target.checked;
    } else {
      object[name] = value
    }
    this.setState({ inputData: Object.assign({}, this.state.inputData, object)});
  }

  showNotification(message, status){
    UIkit.notification({
      message: message,
      status: status,
      pos: 'top-right',
      timeout: 5000
    });
  }

  save(){
    let requiredfields = ["model","brand"];
    let cases = [];
    // validations
    if( this.state.inputData.model && this.state.inputData.brand && (this.state.inputData.hard || this.state.inputData.rubber || this.state.inputData["threed"]) ){
      if(this.state.inputData.hard === true ){
        cases.push(Object.assign({ type: "Hard Case", option: this.state.inputData.hardcaseoption ? this.state.inputData.hardcaseoption : false  }));
      }
      if (this.state.inputData.rubber === true) {
        cases.push(Object.assign({ type: "Rubber Case", option: this.state.inputData.rubbercaseoption ? this.state.inputData.rubbercaseoption : false }));
      }
      if (this.state.inputData.threed === true){
        cases.push(Object.assign({ type: "3D Case", option: this.state.inputData.threedcaseoption ? this.state.inputData.threedcaseoption: false }));
      }
      this.setState({ loading: true }, () => {
        Meteor.call('createPhoneUnits', this.state.inputData.model, this.state.inputData.brand, cases, (error, result) => {
          if(error){
            alert("Error Adding Phone. Please Try Again.");
          } else {
            alert("Successfuly Added Phone");
            browserHistory.push("/phone/"+result);
          }
        });
      });
    } else {
      alert("Please put the Model, Brand and Case type");
    }
  }

  validateInputs(){

  }
  
  render() {
    if(this.state.loading){
      return (<Spinner />)
    }
    return (
      <form ref={component => this.form = component}>
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">Add Phone</legend>

          <div className="uk-margin">
            <input name="model" onChange={this.getValue} className="uk-input" type="text" placeholder="Phone Model" />
          </div>

          <div className="uk-margin">
            <select onChange={this.getValue} name="brand" className="uk-select" type="text" placeholder="Brand Name" >
              { this.state.brands.map((item, i) => (<option key={i} value={item} > { item ? item : "--Select Brand--" } </option>)) }
            </select>
          </div>

          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input onChange={this.getValue} className="uk-checkbox" type="checkbox" name="hard" /> Hard Case</label>
            <label><input onChange={this.getValue} className="uk-checkbox" type="checkbox" name="rubber" /> Rubber Case</label>
            <label><input onChange={this.getValue} className="uk-checkbox" type="checkbox" name="threed" /> 3D Case</label>
          </div>

          <div className="uk-margin">
            <input onChange={this.getValue} name="hardcaseoption" className="uk-input" type="text" placeholder="Hard Case Options" />
          </div>

          <div className="uk-margin">
            <input onChange={this.getValue} name="rubbercaseoption" className="uk-input" type="text" placeholder="Rubber Case Options" />
          </div>

          <div className="uk-margin">
            <input onChange={this.getValue} name="threedcaseoption" className="uk-input" type="text" placeholder="3D Case Options" />
          </div>

          <div  className="uk-margin">
            <button type="button" className="uk-button uk-button-primary uk-width-1-1" onClick={this.save}>Save</button>
          </div>

        </fieldset>
      </form>
    );
  }
}

export default AddPhone;