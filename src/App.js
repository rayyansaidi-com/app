import React from 'react'
import './App.css'

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import lightBlue from '@material-ui/core/colors/lightBlue'
import red from '@material-ui/core/colors/red'
import defaultContent from './content.json'
import {
  parseJSON,
  retargetLinks,
  getContent
} from './utilities'
import { renderSidebar, renderContent } from './utilities/renderers'

const contentOutput = getContent()

const content = parseJSON(contentOutput || defaultContent)

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display: 'none'
  },
  headerText: {
    fontWeight: 600
    // alignSelf: 'auto'
  },
  toolbar: {
    '-webkit-app-region': 'drag',
    justifyContent: 'center'
  },
  sidebarHeader: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
    marginTop: 15
  },
  next: {
    float: 'right',
    marginRight: 5
  },
  h3: {
    fontWeight: 600
  },
  inlineImage: {
    float: 'left',
    margin: 20,
    width: 550,
    maxWidth: `calc(100vw - ${drawerWidth + 100}px)`
  },
  paragraph: {
    margin: 20,
    marginTop: 25,
    fontSize: 18
  },
  image: {
    width: 550,
    maxWidth: `calc(100vw - ${drawerWidth + 100}px)`
  }
}))

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: red
    }
  })
  return (
    <div className="root">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" className="appBar">
          <Toolbar className="toolbar">
            <Typography className="headerText" variant="h6" noWrap>
              Rayyan Saidi Desktop
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className="drawer"
          variant="permanent"
          classes={{
            paper: 'drawerPaper'
          }}
        >
          <Toolbar />
          <div className="drawerContainer">
            <List>
              {renderSidebar(content)}
            </List>
          </div>
        </Drawer>
        {renderContent(content)}
      </MuiThemeProvider>
    </div>
  )
}

window.onload = () => {
  retargetLinks()
}

export default App
