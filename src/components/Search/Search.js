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
      year: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange (year) {
    this.setState({ year })
  }
  async handleSubmit () {
    let car = await searchByYearAndMake('2000', 'saturn', 'LS')
    console.log(car)
    this.setState({
      fireRedirect: true,
      carInfo: car
    })
  }

  render () {
    const { fireRedirect } = this.state

    return (
      <div>
        <div id='search-container'>
          <TextField
            id='search-input'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchOutlined />
                </InputAdornment>
              )
            }}
          />
          <YearPicker
            onChange={this.onDateChange}
            id='date-picker'
          />
          <Button
            onClick={this.handleSubmit}
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
