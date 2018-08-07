import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class Search extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div>
          <TextField />
        </div>
        <div>
          <Button variant='outlined' color='primary' className='search-button'>
                  Search
          </Button>
        </div>
      </div>
    )
  }
}

export default Search
