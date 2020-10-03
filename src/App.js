import React, { Component } from 'react'
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import rayyan from './images/rayyan.jpg'
import salam from './images/salam.jpg'
import wissam from './images/wissam.jpg'
import rakie from './images/rakie.jpg'
import salame from './images/salame.jpg'
import orlando from './images/orlando.jpeg'
import south from './images/south.jpeg'
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
import BookIcon from '@material-ui/icons/Book'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import ImageIcon from '@material-ui/icons/Image'
import FamilyIcon from '@material-ui/icons/SupervisorAccount'
import EsportsIcon from '@material-ui/icons/SportsEsports'
import CakeIcon from '@material-ui/icons/Cake'
import FaceIcon from '@material-ui/icons/Face'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import AppsIcon from '@material-ui/icons/Apps'
import green from '@material-ui/core/colors/green'
import yellow from '@material-ui/core/colors/yellow'

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

const listSidebarItem = (text, icon, onclick) => {
  return (
    <ListItem onClick={onclick} button key={text}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

const Content = (props) => {
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
        <Typography paragraph className={classes.paragraph}>
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


function handleClick(string) {
  document.getElementById('intro').style.display = 'none'
  document.getElementById('favorite').style.display = 'none'
  document.getElementById('pictures').style.display = 'none'
  document.getElementById('family').style.display = 'none'
  document.getElementById('treasure').style.display = 'none'
  document.getElementById('holiday').style.display = 'none'
  document.getElementById('birthday').style.display = 'none'
  document.getElementById('father').style.display = 'none'
  document.getElementById('mother').style.display = 'none'
  document.getElementById('valentine').style.display = 'none'
  document.getElementById(string).style.display = 'block'
}

function sidebarIntroClick() {
  handleClick('intro')
}
function sidebarFavoriteClick() {
  handleClick('favorite')
}
function sidebarPicturesClick() {
  handleClick('pictures')
}
function sidebarFamilyClick() {
  handleClick('family')
}
function sidebarTreasureClick() {
  handleClick('family')
}
function sidebarHolidayClick() {
  handleClick('holiday')
}
function sidebarBirthdayClick() {
  handleClick('birthday')
}
function sidebarFatherClick() {
  handleClick('father')
}
function sidebarMotherClick() {
  handleClick('mother')
}
function sidebarValentineClick() {
  handleClick('valentine')
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
            <Divider />
            <Typography noWrap className={classes.sidebarHeader}>
              Current Projects
            </Typography>
            <Divider />
            <List>
              {listSidebarItem('Introduction', <BookIcon />, sidebarIntroClick)}
              {listSidebarItem(
                'RS Office',
                <HomeWorkIcon />,
                sidebarFavoriteClick
              )}
              {listSidebarItem(
                'Rayyan Saidi Desktop',
                <AppsIcon />,
                sidebarPicturesClick
              )}
            </List>
          </div>
        </Drawer>
        <Content
          id="intro"
          display="block"
          image={rayyan}
          title="Introduction"
          previous="disabled"
          next={sidebarFavoriteClick}
        >
          
        </Content>
        <Content
          id="favorite"
          title="Favorite things to do outside of school"
          previous={sidebarIntroClick}
          next={sidebarPicturesClick}
        >
          
        </Content>
        <Content
          id="pictures"
          title="Pictures of Family Members"
          previous={sidebarFavoriteClick}
          next={sidebarFamilyClick}
        >

        </Content>
        <Content
          id="family"
          title="Family Details"
          previous={sidebarPicturesClick}
          next="disabled"
        >
        
        </Content>
        <Content id="treasure"></Content>
        <Content id="holiday"></Content>
        <Content id="birthday"></Content>
        <Content id="mother"></Content>
        <Content id="father"></Content>
        <Content id="valentine"></Content>
      </MuiThemeProvider>
    </div>
  )
}
