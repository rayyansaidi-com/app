import React from 'react'
import {Typography} from './components'
import './Preferences.css'
import styled from 'styled-components'
// import colors from './colors'

const PrefsContainer = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: white;
  box-shadow: 0 0 25px -5px black;
  width: 80vw;height:80vh;
  border-radius: 10px;
`

function Preferences (props) {
  return (
    <PrefsContainer id={props.id}>
      <span style={{fontSize: 50}}>&times;</span>
      <Typography h1>
        Hello
      </Typography>
    </PrefsContainer>
  )
}

export default Preferences
