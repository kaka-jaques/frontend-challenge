import styled from 'styled-components'

export const Container = styled.main`
  text-align: center;
`

export const Header = styled.div`
  background-color: gray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Modal = styled.div`
  background-color: white;
  padding: 50px;
  width: 40%;
  height: 60%;
  position: absolute;
  border-radius: 8px;
`

export const DateHeader = styled.div`
  p{
    font-size: 20px;
  };
  #full-date{
    text-align: left;
    margin-right: auto;
    h1{
      font-weight: 600;
      font-size: 60px;
    }
    #month{
      font-weight: 500;
    }
  }
  #week-day{
    margin-left: auto;
  }
  align-items: center;
  width: 100%;
  display: flex;
`
