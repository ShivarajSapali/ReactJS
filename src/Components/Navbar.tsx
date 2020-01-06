import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { PersonAdd, Group, ContactMail } from "@material-ui/icons";
const Navbar = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography color="inherit" variant="subtitle1">
            <PersonAdd /> Add User
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography color="inherit" variant="subtitle1">
            <Group /> All Users
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography color="inherit" variant="subtitle1">
            <ContactMail /> Contact
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Navbar;
