import React, { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
class SearchPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "P9",
          brand: "Huawei",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
        {
          name: "iPhone 6",
          brand: "Apple",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
        {
          name: "Galaxy S7 Edge",
          brand: "Samsung",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
        {
          name: "Galaxy S8",
          brand: "Samsung",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
        {
          name: "Zenfone Max",
          brand: "Asus",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
        {
          name: "Zenfone 3",
          brand: "Asus",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
        {
          name: "Xperia XA",
          brand: "Sony",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
        {
          name: "Xperia XA Ultra",
          brand: "Asus",
          case: [
            "3D Case",
            "Hard Case",
            "Rubber Case"
          ]
        },
      ],
      searchlist: []
    }
  }
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

export default SearchPhone;