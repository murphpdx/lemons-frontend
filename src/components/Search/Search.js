import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DatePicker from 'react-datepicker'
let moment = require('moment')

export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      year: moment(),
      make: '',
      model: ''
    }
  }

  handleDateChange (year) {
    this.setState({
      year: year
    })
  }

  render () {
    return (
      <form>
        <div>
          <DatePicker
            selected={this.state.year}
            dateFormat='YYYY'
            onChange={this.handleDateChange}
          />
          <TextField value={this.state.model} />
          <TextField value={this.state.make} />
        </div>
        <div>
          <Button variant='outlined' color='primary' className='search-button'>
                  Search
          </Button>
        </div>
      </form>
    )
  }
}

export default Search
