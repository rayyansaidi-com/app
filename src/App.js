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

const store = new window.Store()

const axios = require('axios')

axios.get('https://rayyansaidi.com/download/content.json')
  .then((response) => {
    store.set('content', response.data)
  })
  .catch((error) => {
    // handle error
    console.log(error)

    if (!store.get('content')) {
      store.set('content', {
        headers: {
          'Current Projects': [
            'RS Office'
          ],
          'Completed Projects': [
            'Holiday Templates',
            'rayyansaidi.com',
            'Treasure Hunt'
          ],
          'Beta Tests': [
            'Rayyan Saidi Desktop',
            'RS Email'
          ],
          Blog: [

          ]
        },
        content: {
          'RS Office': "# RS Office\n## A free and open source office suite\nRS office will allow you to create forms on something I'm going to make named RS Survey, send emails using RS Email, write documents in RS Write, code in RS Code, and make slideshows in RS Present. All you will need is a rayyansaidi.com account, which is comming soon along with RS Office. Coding with RS Office won't even take up space on your computer! The email service is super close to done, and you also will soon be able to create forms also.",
          'Holiday Templates': 'https://holidaytemplates.rayyansaidi.com/',
          'rayyansaidi.com': 'https://rayyansaidi.com/',
          'Treasure Hunt': 'https://unpkg.com/rayyansaidi-desktop@2.2.1/src/index.html',
          'Rayyan Saidi Desktop': "# Rayyan Saidi Desktop\n## The best way to view rayyansaidi.com offline\nRayyan Saidi Desktop  is the best way to view rayyansaidi.com offline. It even comes with some premium fetures that you can't get on the web! Even though you may have this app already, we are still always working on it, and the beta can be downloaded at [git.io/rayyansaidi-desktop](https://git.io/rayyansaidi-desktop)!",
          'RS Email': "# RS Email\n## The ultimate way to send emails from rayyansaidi.com account\nEven though you send emails from email services, RS Email beets them all with [rayyansaidi.com](https://rayyansaidi.com/) accounts, because RS Email is the ONLY way to send them through your [rayyansaidi.com](https://rayyansaidi.com/) accounts. Even though [rayyansaidi.com](https://rayyansaidi.com/) accounts havn't been invented, I'm releasing the beta, but it's going to be done so you can send an email from [anything you want]@rayyansaidi.com."
        }
      })
    }
  })

const content = store.get('content')
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

function camelize (str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return '' // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase()
  })
}

function handleClick (string) {
  Object.keys(content.headers).map((value) => {
    return content.headers[value].map((value) => {
      return document.getElementById(camelize(value)).style.display = 'none'
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
                        return <SidebarItem key={index} text={value} onClick={() => { handleClick(camelize(value)) }} />
                      })}
                    </List>
                  </div>
                )
              })}
            </List>
          </div>
        </Drawer>
        {
          Object.keys(content.headers).map((value) => {
            return content.headers[value].map((value) => {
              return (
                <Content
                  id={camelize(value)}
                  dangerouslySetInnerHTML={{ __html: insane(marked(content.content[value]), { allowedTags: ['p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }) }}
                />
              )
            })
          })
        }
      </MuiThemeProvider>
    </div>
  )
}
