import React from 'react'
import logo from './logo.svg'

import { Container, Header, Modal, DateHeader } from './styles'
import Progress from './components/ProgressBar';
import Calendar from './components/Calendar';
import TaskFunctions from './components/TaskFunctions';
import TaskAdiction from './components/TaskAdiction';


function App() {
  return (
    <Container>
      <Header>
        <Modal>
          <DateHeader>
            <Calendar/>
          </DateHeader>
          <Progress/>
          <TaskFunctions/>
          <TaskAdiction/>
        </Modal>
      </Header>
    </Container>
  )
}

export default App
