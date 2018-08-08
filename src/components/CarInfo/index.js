import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export class CarInfo extends React.Component {
  constructor (props) {
    super(props)
    let carName = 'type of car' // placeholder
    this.state = {
      carName: carName
    }
  }

  toLowerCase (string) {
    var a = string
    var b = a.toLowerCase()
    return b
  }

  render () {
    const { carDetails } = this.props.location.state
    return (
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='display1' color='black'>
              Car Information: {carDetails.Results[0].Make} {carDetails.Results[0].Model} {carDetails.Results[0].ModelYear}
            </Typography>
            <div>
              <Button
                size='large'
                color='primary'
                variant='outlined'
                component={Link}
                to={'../'}
              >
                back to search
              </Button>
            </div>
            <br />
              Summary:
            {carDetails.Results.map(recalls =>
              <div>
                <Card>
                  <Typography gutterBottom variant='body2' color='textSecondary'>
                    Summary:
                  </Typography>
                  <Typography style={{marginBottom: 8, marginLeft: 8, marginRight: 6, marginTop: 8}}>
                    <Typography style={{fontWeight: 'bold'}}>ReportReceivedDate:</Typography> {this.toLowerCase(recalls.ReportReceivedDate.toString())}
                    <br />
                    <Typography style={{fontWeight: 'bold'}}>Component:</Typography> {this.toLowerCase(recalls.Component.toString())}
                    <br />
                    <Typography style={{fontWeight: 'bold'}}>Conequence:</Typography> {this.toLowerCase(recalls.Conequence.toString())}
                    <br />
                    <Typography style={{fontWeight: 'bold'}}>Remedy:</Typography> {this.toLowerCase(recalls.Remedy.toString())}
                    <br />
                    <Typography style={{fontWeight: 'bold'}}>Notes:</Typography> {this.toLowerCase(recalls.Notes.toString())}
                    {/* <Typography style={{fontWeight: 'bold'}}>ReportReceivedDate:</Typography> {recalls.ReportReceivedDate} */}
                    {/* <br /> */}
                    {/* <Typography style={{fontWeight: 'bold'}}>Component:</Typography> {recalls.Component} */}
                    {/* <br /> */}
                    {/* <Typography style={{fontWeight: 'bold'}}>Conequence:</Typography> {recalls.Conequence} */}
                    {/* <br /> */}
                    {/* <Typography style={{fontWeight: 'bold'}}>Remedy:</Typography> {recalls.Remedy} */}
                    {/* <br /> */}
                    {/* <Typography style={{fontWeight: 'bold'}}>Notes:</Typography> {recalls.Notes} */}
                  </Typography>
                </Card>
                <Typography>
                  <br />
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
        console.log(carDetails.Results[0])
      </div>
    )
  }
}

export default CarInfo
