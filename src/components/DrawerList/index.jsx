import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/Mail"
// import Drawer from '@material-ui/core/Drawer'
// import Hidden from '@material-ui/core/Hidden'
// import IconButton from '@material-ui/core/IconButton'
import InboxIcon from "@material-ui/icons/MoveToInbox"
import { Link as RouterLink } from "gatsby"
import React from "react"
// import MenuIcon from '@material-ui/icons/Menu'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core/styles'
import { menuList } from "../../config"
// const drawerWidth = 240

// const useStyles = makeStyles((theme) => ({
//   toolbar: theme.mixins.toolbar,
// }))

// const ListItemLink = props => {
//   const { icon, primary, to } = props
// }

const DrawerList = () => {
  // const classes = useStyles()

  return (
    <>
      <div>
        <Divider />
        <List>
          {menuList.map((items, i) => (
            <ListItem button key={i} to={items.link} component={RouterLink}>
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText primary={items.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}

export default DrawerList
