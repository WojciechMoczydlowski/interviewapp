import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "./components/FormLabel";
import UserList from "./components/UserList";
import UserListItem from "./components/UserListItem";


const CryptoUsers = props => {
  const { classes } = props;
  return (
    <div>
      <FormLabel />
      <UserList/>
      <UserListItem />
    </div>
  );
};

const styles = theme => ({
  root: {      
   
  }
});

export default withStyles(styles)(CryptoUsers);
