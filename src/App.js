import React from 'react'
import './App.css'
import { Typography, List, Toolbar, AppBar } from './components'
import defaultContent from './content.json'
import { parseJSON, retargetLinks, getContent } from './utilities'
import { renderSidebar, renderContent } from './utilities/renderers'
import "fontsource-roboto"
import colors from './colors'

const contentOutput = getContent()

const content = parseJSON(contentOutput || defaultContent)

function App() {
  return (
    <div className="root">
      <AppBar position="fixed" className="appBar">
        <Toolbar className="toolbar">
          <Typography className="headerText" h5 noWrap>
            Rayyan Saidi Desktop
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        className="drawer"
        variant="permanent"
        classes={{
          paper: 'drawerPaper'
        }}
        style={{backgroundColor: '#fff', border: '1px solid rgba(0, 0, 0, 0.12)', height: '100vh', overflowY: 'auto', position:"fixed",top:0,left:0}}
      >
        <Toolbar />
        <div className="drawerContainer">
          <List>
            {renderSidebar(content)}
          </List>
        </div>
      </div>
      {renderContent(content)}
    </div>
  )
}

window.onload = () => {
  retargetLinks()
}

export default App
export { colors }