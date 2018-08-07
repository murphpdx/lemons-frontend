import React, { Component } from 'react'
import { Search } from '../Search/Search'
import { searchByYearAndMake } from './../../services/search';
export class Home extends Component {
  constructor (props) {
    super(props)
      console.log('---- DEBUG ----');
      searchByYearAndMake('2000', 'saturn').then(response => {
          console.log(response);
          console.log('---------------');
      })
  }

  render () {

      return (
      <div>
        <div className="search-bar">
            <Search />
        </div>
      </div>
    )
  }
}
export default Home
