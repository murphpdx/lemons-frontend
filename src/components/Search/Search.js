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
        <TextField />
        <Button variant='outlined'>
                    Search
        </Button>
      </div>
    )
  }
}

export default Search