import React, { Component } from 'react'
import {Search} from '../Search/Search'

export class Home extends Component {
  constructor (props) {
    super(props)
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
