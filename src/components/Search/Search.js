import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router'
import { searchByYearAndMake } from './../../services/search'
import YearPicker from 'react-year-picker'

export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fireRedirect: false,
      carInfo: '',
      year: null,
      make: '',
      model: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange (year) {
    this.setState({ year })
  }
  async handleSubmit () {
    let car = await searchByYearAndMake(this.state.year, this.state.make, this.state.model)
    console.log(car)
    this.setState({
      fireRedirect: true,
      carInfo: car,
      year: new Date()
    })
  }

  render () {
    const { fireRedirect } = this.state

    return (
      <div>
        <div id='search-container'>
          <InputAdornment
            id='magnifying-glass'
            position='start'>
            <SearchOutlined />
          </InputAdornment>
          <TextField
            value={this.state.make}
            className='search-obj'
            id='search-input'
            placeholder='Make'
            onChange={(event) => (this.setState({make: event.target.value}))}
          />
          <TextField
            value={this.state.model}
            className='search-obj'
            placeholder='Model'
            onChange={(event) => (this.setState({model: event.target.value}))}
          />
          <YearPicker
            className='search-obj'
            onChange={this.onDateChange}
            id='date-picker'
          />
          <Button
            className='search-obj'
            onClick={this.handleSubmit}
            color='default'
            variant='contained'
          >
                Search
          </Button>
        </div>

        {fireRedirect &&
        <Redirect
          to={{
            pathname: '/carinfo',
            state: { carDetails: this.state.carInfo }
          }}
        />
        }
      </div>
    )
  }
}

export default Search
