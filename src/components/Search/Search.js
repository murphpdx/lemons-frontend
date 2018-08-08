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

  handleSubmit (event) {
    console.log('hi')
    this.setState({
      fireRedirect: true
    })
    searchByYearAndMake('2000', 'saturn').then(response => {
      console.log(response)
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
            to={'/carinfo'}
            type='submit'
          >
                Search
          </Button>

        </form>
        {fireRedirect &&
        <Redirect
          to={'/carinfo'}
        />
        }
      </div>
    )
  }
}

export default Search
