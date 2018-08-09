import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'

export class CarInfo extends React.Component {
  constructor (props) {
    super(props)
    let carName = 'type of car' // placeholder
    this.state = {
      expanded: false,
      carName: carName
    }
    this.expandOnClick = this.expandOnClick.bind(this)
  }

  expandOnClick () {
    this.setState({expanded: !this.state.expanded})
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
            <Typography gutterBottom variant='display1'>
              {carDetails.Results[0].ModelYear} {carDetails.Results[0].Make} {carDetails.Results[0].Model}
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
            {carDetails.Results.map(recalls =>
              <div key={recalls.NHTSACampaignNumber}>
                <Card>
                  <Typography gutterBottom variant='body2' color='textSecondary' />
                  <Typography style={{marginBottom: 8, marginLeft: 8, marginRight: 6, marginTop: 8}}>
                    <Typography style={{fontWeight: 'bold'}}>ReportReceivedDate:</Typography>
                    <Moment format='MMMM Do, YYYY' unix>
                      {((recalls.ReportReceivedDate.replace(/[^\d.]/g, '')).slice(0, 10))}
                    </Moment>
                    <br />
                    <Typography style={{fontWeight: 'bold'}}>Component:</Typography> {this.toLowerCase(recalls.Component.toString())}
                    <br />
                  </Typography>
                  <CardActions>
                    <IconButton
                      onClick={this.expandOnClick}
                      aria-expanded={this.state.expanded}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={this.state.expanded}>
                    <Typography style={{marginBottom: 8, marginLeft: 8, marginRight: 6, marginTop: 8}}>
                      <Typography style={{fontWeight: 'bold'}}>Summary:</Typography> {this.toLowerCase(recalls.Summary.toString())}
                      <br />
                      <Typography style={{fontWeight: 'bold'}}>Consequence:</Typography> {this.toLowerCase(recalls.Conequence.toString())}
                      <br />
                      <Typography style={{fontWeight: 'bold'}}>Remedy:</Typography> {this.toLowerCase(recalls.Remedy.toString())}
                      <br />
                      <Typography style={{fontWeight: 'bold'}}>Notes:</Typography> {this.toLowerCase(recalls.Notes.toString())}
                      <br />
                    </Typography>
                  </Collapse>
                </Card>
                <Typography>
                  <br />
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default CarInfo
