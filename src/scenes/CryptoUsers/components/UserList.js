import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const UserList = (props) =>{
  const { classes } = props;
  return <div>UserList</div>;
}
const styles = theme => ({
  root: {      

  }
});

UserList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserList);
