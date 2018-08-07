import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchOutlined from '@material-ui/icons/SearchOutlined';

export class Search extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div>
            <TextField
                id="search-input"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default Search
