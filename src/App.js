import React from 'react'
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
import green from '@material-ui/core/colors/green'
import yellow from '@material-ui/core/colors/yellow'

const drawerWidth = 240

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
    margin: 20
  },
  paragraph: {
    margin: 20,
    marginTop: 25,
    fontSize: 18
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

export default () => {
  const classes = useStyles()
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: yellow
    }
  })
  class Content extends React.Component {
    render () {
      return (
        <div
          id={this.props.id}
          className={classes.content}
          style={{ display: this.props.display || 'none' }}
        >
          <Toolbar />
          <Typography className={classes.h3} variant="h3">
            {this.props.title}
          </Typography>
          <br />
          {this.props.image ? (
            <img
              alt=""
              src={this.props.image}
              className={classes.inlineImage}
            />
          ) : null}
          <Typography paragraph className={classes.paragraph}>
            {this.props.children}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.previous === 'disabled'}
            onClick={
              this.props.previous !== 'disabled'
                ? this.props.previous
                : () => {}
            }
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.next === 'disabled'}
            onClick={
              this.props.next !== 'disabled' ? this.props.next : () => {}
            }
            className={classes.next}
          >
            Next
          </Button>
        </div>
      )
    }
  }
  const handleClick = (string) => {
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

  const sidebarIntroClick = () => {
    handleClick('intro')
  }
  const sidebarFavoriteClick = () => {
    handleClick('favorite')
  }
  const sidebarPicturesClick = () => {
    handleClick('pictures')
  }
  const sidebarFamilyClick = () => {
    handleClick('family')
  }
  const sidebarTreasureClick = () => {
    handleClick('family')
  }
  const sidebarHolidayClick = () => {
    handleClick('holiday')
  }
  const sidebarBirthdayClick = () => {
    handleClick('birthday')
  }
  const sidebarFatherClick = () => {
    handleClick('father')
  }
  const sidebarMotherClick = () => {
    handleClick('mother')
  }
  const sidebarValentineClick = () => {
    handleClick('valentine')
  }

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
              Home
            </Typography>
            <Divider />
            <List>
              {listSidebarItem('Introduction', <BookIcon />, sidebarIntroClick)}
              {listSidebarItem(
                'Favorite things to do outside of school',
                <HomeWorkIcon />,
                sidebarFavoriteClick
              )}
              {listSidebarItem(
                'Pictures of Family Members',
                <ImageIcon />,
                sidebarPicturesClick
              )}
              {listSidebarItem(
                'Family Details',
                <FamilyIcon />,
                sidebarFamilyClick
              )}
            </List>
            <Divider />
            <Typography noWrap className={classes.sidebarHeader}>
              Games
            </Typography>
            <Divider />
            <List>
              {listSidebarItem(
                'Treasure Hunt',
                <EsportsIcon />,
                sidebarTreasureClick
              )}
            </List>
            <Divider />
            <Typography noWrap className={classes.sidebarHeader}>
              Holiday Templates
            </Typography>
            <Divider />
            <List>
              {listSidebarItem(
                'About',
                <CardGiftcardIcon />,
                sidebarHolidayClick
              )}
              {listSidebarItem('Birthday', <CakeIcon />, sidebarBirthdayClick)}
              {listSidebarItem(
                "Father's day",
                <FaceIcon />,
                sidebarFatherClick
              )}
              {listSidebarItem(
                "Mother's day",
                <FaceIcon />,
                sidebarMotherClick
              )}
              {listSidebarItem(
                "Valentine's day",
                <FavoriteIcon />,
                sidebarValentineClick
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
          To start off, my name is Rayyan Saidi. I am a small 10-year-old boy
          that lives in PA. Below is a picture of me. I am going into 6th grade
          at Dorseyville Middle School in August. I have great parents named
          Rakie Cham and Wissam Saidi, a grandma name Salame Cham, and a
          wonderful sister named Salam Saidi. I spent the beginning of 2020 in a
          dangerous pandemic that was one of the worst ones in history. That
          time was difficult because everything was closed, and families were
          struggling to get food and water. Luckily, my family was able to get
          the food and water we needed because both of my parents had jobs.
        </Content>
        <Content
          id="favorite"
          title="Favorite things to do outside of school"
          previous={sidebarIntroClick}
          next={sidebarPicturesClick}
        >
          1. Electronics
          <br />
          2. Coding
          <br />
          3. Resting and Reading
          <br />
          4. Playing chess with my sister
          <br />
          5. Meeting with friends
          <br />
        </Content>
        <Content
          id="pictures"
          title="Pictures of Family Members"
          previous={sidebarFavoriteClick}
          next={sidebarFamilyClick}
        >
          <img alt="Rayyan Saidi" className={classes.image} src={rayyan} />
          Rayyan Saidi
          <br />
          <img alt="Salam Saidi" className={classes.image} src={salam} />
          Salam Saidi
          <br />
          <img alt="Wissam Saidi" className={classes.image} src={wissam} />
          Wissam Saidi
          <br />
          <img alt="Rakie Cham" className={classes.image} src={rakie} />
          Rakie Cham
          <br />
          <img alt="Salame Cham" className={classes.image} src={salame} />
          Salame Cham
          <br />
          <img
            alt="Cousins in Orlando, Florida"
            className={classes.image}
            src={orlando}
          />
          Cousins in Orlando, Florida
          <br />
          <img
            alt="Cousins in Boynton Beach, Florida"
            className={classes.image}
            src={south}
          />
          Cousins in Boynton Beach, Florida
        </Content>
        <Content
          id="family"
          title="Family Details"
          previous={sidebarPicturesClick}
          next="disabled"
        >
          <b>Rayyan Saidi</b>
          <ul>
            <li>10 years old</li>
            <li>
              Person who made this app and{' '}
              <a href="https://rayyansaidi.com">rayyansaidi.com</a>
            </li>
            <li>Oldest kid in my house</li>
            <li>Going into 6th grade</li>
          </ul>
          <b>My sister</b>
          <ul>
            <li>8 years old</li>
            <li>
              Creater of <a href="https://salamsaidi.com">salamsaidi.com</a>
            </li>
            <li>Youngest kid of my house</li>
            <li>Going into 4th grade</li>
          </ul>
          <b>My dad</b>
          <ul>
            <li>
              Principle of the{' '}
              <a href="http://saidigroup.pitt.edu">Saidi Reasearch Group</a>
            </li>
            <li>Mine and Salam&apos;s father</li>
            <li>Works as a machanical Engener</li>
          </ul>
          <b>My mom</b>
          <ul>
            <li>
              Part of the faculaty of{' '}
              <a href="https://www.engineering.pitt.edu/Sub-Sites/Labs/HMBL/Content/About-Us/">
                SSOE
              </a>
            </li>
            <li>Mine and Salam&apos;s mother</li>
            <li>Works as a Bio Engener</li>
          </ul>
          <b>Salame Cham</b>
          <ul>
            <li>A wonderfull cook</li>
            <li>Mine and Salam&apos;s Grandma</li>
            <li>Great Knitter</li>
            <li>Best Grandma ever</li>
          </ul>
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
