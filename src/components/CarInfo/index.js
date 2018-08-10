import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Warning from '@material-ui/icons/Warning';
import Collapse from '@material-ui/core/Collapse';
import moment from 'moment';

const flaggedWords = ['death', 'injury', 'crash', 'fire']

export class CarInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            expanded: false
        }

        this.handleExpandClick = this.handleExpandClick.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.showWarning = this.showWarning.bind(this)
    }

    showWarning (cons) {
        cons = cons.toLowerCase()
       for(let i = 0; i < flaggedWords.length; i++ ) {
           if(cons.indexOf(flaggedWords[i]) > -1) {
               return true
           }
       }
       return false
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    renderItem (item) {
        if(item == null) {
            return ''
        }
        return (
          <div>
            <Typography
              style={{ fontWeight: 'bold' }}
            >
              Consequence:
            </Typography> { item.toString() }
            <br /> <br />
          </div>
        )
    }

    render () {
        const { carDetails } = this.props.location.state

        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant='display1'>
                            {carDetails.Results[ 0 ].ModelYear} {carDetails.Results[ 0 ].Make} {carDetails.Results[ 0 ].Model}
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
                            <Card key={recalls.NHTSACampaignNumber}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Recall">
                                            {recalls.Component.toString().substr(0, 3)}
                                        </Avatar>
                                    }
                                    action={
                                        <div>
                                            <IconButton>
                                                <Warning style={this.showWarning(recalls.Conequence) ? {} : { display: 'none' }} disabled='true' color="error"/>
                                            </IconButton>
                                            <IconButton
                                                onClick={this.handleExpandClick}
                                                aria-expanded={this.state.expanded}
                                            >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </div>
                                    }
                                    title={recalls.Component.toString()}
                                    subheader={moment(recalls.ReportReceivedDate).format('LLLL')}

                                />
                                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        {this.renderItem(recalls.Component)}
                                        {this.renderItem(recalls.Conequence)}
                                        {this.renderItem(recalls.Remedy)}
                                        {this.renderItem(recalls.Notes)}
                                        {this.renderItem(recalls.Summary)}
                                    </CardContent>
                                </Collapse>
                            </Card>)}
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default CarInfo
