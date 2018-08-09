import React, { Component } from 'react'
import { Search } from '../Search/Search'
import lemon from '../../assets/lemon.jpg'

export class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <img className='lemon' src={lemon} />
        <div className='search-bar'>
          <Search />
        </div>
      </div>
    )
  }
}
export default Home
