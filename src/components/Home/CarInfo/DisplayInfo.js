import React from 'react'
import {LayoutGrid, LayoutGridCell} from '@material-ui/react-layout-grid'
// import {LayoutGridCell} from '@material-ui/react-layout-grid'
import {
  CardHeader,
  CardTitle,
  CardText
} from '@material-ui/react-card'

import {Card} from '@material/card/mdc-card'
import {FormattedMessage} from '@material-ui/react-formattedmessage'

class CarInfo extends React.Component {
  constructor (props) {
    super(props)
    let carName = 'toyota' // placeholder
    this.state = {
      carName: carName
    }
  }

  render () {
    return (

      <LayoutGrid >
        <LayoutGridCell >
          <Card >
            <CardHeader >
              <CardTitle >
                <FormattedMessage>
                  Car Information: {this.state.carName}
                </FormattedMessage>
              </CardTitle>
            </CardHeader>
            <CardText >
                            //display car information
            </CardText>
          </Card>
        </LayoutGridCell>
      </LayoutGrid>

    )
  }
}

export default CarInfo
