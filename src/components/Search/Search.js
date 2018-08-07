import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import Button from '@material-ui/core/Button'

export class Search extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form>
        <div>
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
          <Button>
                Search
          </Button>
        </div>
        <div />
      </form>
    )
  }
}

export default Search
