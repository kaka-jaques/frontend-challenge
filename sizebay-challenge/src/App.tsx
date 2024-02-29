import React from 'react'
import logo from './logo.svg'

import { Container, Header, Modal, DateHeader } from './styles'
import ScreenreaderLabelExample from './components/ProgressBar';

var dateObject = new Date();
var day = dateObject.getUTCDate();
var date = dateObject.getUTCDay();
var month = dateObject.getUTCMonth()+1;
var year = dateObject.getUTCFullYear();
var weekText = {
  1: 'Sunday',
  2: 'Monday',
  3: 'Tuesday',
  4: 'Wednesday',
  5: 'Thursday',
  6: 'Friday',
  7: 'Saturday'
}
var monthText = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};

function App() {
  return (
    <Container>
      <Header>
        <Modal>
          <DateHeader>
          <div id='full-date'>
            <ul>
              <li>
                <h1>{day}</h1>
              </li>
              <li>
                <div>
                  <p id='month'>{monthText[2]}</p>
                  <p>{year}</p>
                </div>
              </li>
            </ul>
          </div>
          <div id='week-day'>
            <p>{weekText[4]}</p>
          </div>
          </DateHeader>
          <ScreenreaderLabelExample/>
        </Modal>
      </Header>
    </Container>
  )
}

export default App
