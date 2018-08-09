import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router'
import { searchByYearAndMake, getModels, getMakes } from './../../services/search'
import YearPicker from 'react-year-picker'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fireRedirect: false,
      carInfo: '',
      year: null,
      make: 'A Car',
      model: '',
      makes: [],
      models: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.makeChange = this.makeChange.bind(this)
    this.onModelChange = this.onModelChange.bind(this)
  }

  makeChange (event) {
    console.log(event.target.value)
    this.setState({
      make: event.target.value
    })
    this.populateModels(this.state.year, event.target.value)
  }

  onModelChange (event) {
    this.setState({
      model: event.target.value
    })
  }

  async populateModels (year, model) {
    let result = await getModels(year, model)
    this.setState({
      models: result.Results
    })
  }

  async populateMakes (year) {
    let result = await getMakes(year)
    this.setState({
      makes: result.Results
    })
  }

  onDateChange (year) {
    this.setState({ year })
    this.populateMakes(year)
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
          <YearPicker
            className='search-obj'
            onChange={this.onDateChange}
            id='date-picker'
          />
          <InputLabel className='search-obj input-label' htmlFor='make-select'>Make: </InputLabel>
          <Select
            className='search-obj'
            value={this.state.make}
            onChange={this.makeChange}
            inputProps={{name: 'make', id: 'make-select'}}
          >
            {this.state.makes.map((makeResult) =>
              <MenuItem
                key={makeResult.Make}
                value={makeResult.Make}
              >
                {makeResult.Make}
              </MenuItem>
            )}
          </Select>
          <InputLabel className='search-obj input-label' htmlFor='model-select'>Model: </InputLabel>
          <Select
            className='search-obj'
            value={this.state.model}
            onChange={this.onModelChange}
            inputProps={{name: 'model', id: 'model-select'}}
          >
            {this.state.models.map((models) =>
              <MenuItem
                key={models.Model}
                value={models.Model}
              >
                {models.Model}
              </MenuItem>
            )}
          </Select>
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
