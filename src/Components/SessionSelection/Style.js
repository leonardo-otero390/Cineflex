import styled from 'styled-components'
const DaysList = styled.ul`
  margin-left: 23px;
`
const SessionsList = styled.ul`
    color: white;
    display: flex;
    flex-wrap:wrap;
    a{
      text-decoration: none;
    }
 `
const SessionDate = styled.h1`
    font-size: 20px;
    margin:23px 0;
 `
 const Container = styled.main`
 margin-bottom:147px;
 `
export { SessionsList, SessionDate, DaysList,Container }