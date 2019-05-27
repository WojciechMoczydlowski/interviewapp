import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const UserListItem = (props) =>{
  const { classes } = props;
  return <div>UserListItem</div>;
}
const styles = theme => ({
  root: {      

  }
});


UserListItem.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(UserListItem);
