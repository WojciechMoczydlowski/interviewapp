import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "./components/FormLabel";
import UserList from "./components/UserList";
import UserListItem from "./components/UserListItem";
import Card from '@material-ui/core/Card';

const CryptoUsers = props => {
  const { classes } = props;
  return (
    <Card className = {classes.root}>
      <h2 className = {classes.title}>Crypto users</h2>
      <FormLabel />
      <UserList/>
      <UserListItem />
    </Card>
  );
};

const styles = theme => ({
  root: {      
   maxWidth: '1000px',
   margin: '10px auto 0 auto',
   padding: '20px 40px 20px 40px',
  },
  title: {}
});

CryptoUsers.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(CryptoUsers);
