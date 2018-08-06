import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div style={{ width: '100%', textAlign: 'center', height: '100%'}}>
                    Please enter search parameters:
          <div>
            <TextField />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
