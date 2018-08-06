import React, { Component } from 'react'
import {Search} from '../Search/Search'

export class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div style={{ width: '100%', textAlign: 'center', height: '100%'}}>
                  Lemonade
          <Search />
        </div>
      </div>
    )
  }
}
export default Home
