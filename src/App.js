import React from 'react'
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import green from '@material-ui/core/colors/green'
import yellow from '@material-ui/core/colors/yellow'
import marked from 'marked'
import insane from 'insane'
import defaultContent from './content.json'
import axios from 'axios'
import { JSDOM } from 'jsdom'



axios.get('https://raw.githubusercontent.com/rayyansaidi-com/app/master/src/content.json?rayyansaidi_desktop_random=' + Math.random())
  .then((response) => {
    localStorage.setItem('content', JSON.stringify(response.data))
    window.contentOutput = JSON.stringify(response.data)
  })
  .catch((error) => {
    // handle error
    console.log(error)

    if (!localStorage.getItem('content')) {
      localStorage.setItem('content', JSON.stringify(defaultContent))
      window.contentOutput = JSON.stringify(defaultContent)
    } else if (localStorage.getItem('content').version < defaultContent.version) {
      localStorage.setItem('content', JSON.stringify(defaultContent))
      window.contentOutput = JSON.stringify(defaultContent)
    }
  })


const content = parse(localStorage.getItem('content') || window.contentOutput || defaultContent)

function parse(any) {
  try {
    if (typeof any === 'string') {
      return JSON.parse(any)
    } else if (typeof any === 'object') {
      return any
    } else {
      return
    }
  } catch (err) {
    console.error(err)
    return
  }
}

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

function SidebarItem (props) {
  return (
    <ListItem onClick={props.onClick} button key={props.text}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  )
}

function renderContent (value) {
  const { document } = new JSDOM(`<body>${insane(marked(content.content[value]))}</body>`).window
  const a = document.getElementsByTagName('a')
  for (let i = 0; i < a.length; i++) {
    a[i].setAttribute('target', '_blank');
  }
  return document.body.innerHTML
}

function Content (props) {
  const classes = useStyles()
  return (
    <div
      id={props.id}
      className={classes.content}
      style={{ display: props.display || 'none' }}
    >
      <Toolbar />
      <Typography className={classes.h3} variant="h3">
        {props.title}
      </Typography>
      <br />
      {props.image ? (
        <img
          alt=""
          src={props.image}
          className={classes.inlineImage}
        />
      ) : null}
      <Typography paragraph className={classes.paragraph} dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}>
        {props.children}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        disabled={props.previous === 'disabled'}
        onClick={
          props.previous !== 'disabled'
            ? props.previous
            : () => { }
        }
      >
          Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={props.next === 'disabled'}
        onClick={
          props.next !== 'disabled' ? props.next : () => { }
        }
        className={classes.next}
      >
          Next
      </Button>
    </div>
  )
}

function underscore (str) {
  return str.replace(/ /g, '_').toLowerCase()
}

function handleClick (string) {
  Object.keys(content.headers).map((value) => {
    return content.headers[value].map((value) => {
      return document.getElementById(underscore(value)).style.display = 'none'
    })
  })
  document.getElementById(string).style.display = 'block'
}

export default () => {
  const classes = useStyles()
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: yellow
    }
  })
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.headerText} variant="h6" noWrap>
              Rayyan Saidi Desktop
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {Object.keys(content.headers).map((value, index) => {
                return (
                  <div key={index}>
                    <Divider />
                    <Typography noWrap className={classes.sidebarHeader}>
                      {value}
                    </Typography>
                    <Divider />
                    <List>
                      {content.headers[value].map((value, index) => {
                        return <SidebarItem key={index} text={value} onClick={() => { handleClick(underscore(value)) }} />
                      })}
                    </List>
                  </div>
                )
              })}
            </List>
          </div>
        </Drawer>
        {
          Object.keys(content.headers).map((value0, index0) => {
            return content.headers[value0].map((value1, index1) => {
              return (
                <Content
                  id={underscore(value1)}
                  key={parseInt(`${index0}${index1}`)}
                  dangerouslySetInnerHTML={{__html: renderContent(value1) }}
                  display={index0 === 0 && index1 === 0 ? 'block' : 'none'}
                  previous={0 === index1 ? 'disabled': ()=>{handleClick(underscore(content.headers[value0][index1 - 1]))}}
                  next={content.headers[value0].length -1 === index1 ? 'disabled': ()=>{handleClick(underscore(content.headers[value0][index1 + 1]))}}
                />
              )
            })
          })
        }
      </MuiThemeProvider>
    </div>
  )
}
