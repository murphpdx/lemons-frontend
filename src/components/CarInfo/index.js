import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Home from './index.js'

const style = {
  background: 'black',
  color: 'white',
  size: 12
}

export class CarInfo extends React.Component {
  constructor (props) {
    super(props)
    let carName = 'toyota' // placeholder
    this.state = {
      carName: carName
    }
  }

  render () {
    return (
      <div>
        <Card >
          <CardContent>
            <CardHeader style={style}>
              Car Information: {this.state.carName}
            </CardHeader>
            <div>
              <Button>
                <Home />back to search
              </Button>
            </div>
            <Typography>
              //display car information
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default CarInfo
