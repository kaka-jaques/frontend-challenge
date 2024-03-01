import React from 'react'
import logo from './logo.svg'

import { Container, Header, Modal, DateHeader } from './styles'
import Progress from './components/ProgressBar';
import Calendar from './components/Calendar';


function App() {
  return (
    <Container>
      <Header>
        <Modal>
          <DateHeader>
            <Calendar></Calendar>
          </DateHeader>
          <Progress/>
        </Modal>
      </Header>
    </Container>
  )
}

export default App
