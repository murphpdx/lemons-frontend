import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router'
import { searchByYearAndMake } from './../../services/search'

export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fireRedirect: false,
      carInfo: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit () {
    console.log('hi')
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
        <form onSubmit={this.handleSubmit}>
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
          <Button
            onClick={this.handleSubmit}
          >
                Search
          </Button>

        </form>
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
