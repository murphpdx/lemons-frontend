import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

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
    const { carDetails } = this.props.location.state
    return (
      <div>
        <Card >
          <CardContent>
            <CardHeader style={style}>
              Car Information: {this.carName}
            </CardHeader>
            <div>
              <Button
                component={Link}
                to={'../'}
              >
                back to search
              </Button>
            </div>
            <Typography>
              {carDetails.Results[0].Summary.toString()}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default CarInfo
