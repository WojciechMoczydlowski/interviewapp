import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const ErrorComp = props => {
  const { classes } = props;
  const { message, display } = props;
  return (
    <div className={classes.root}>
      {display ? <div>{message}</div> : <div />}
    </div>
  );
};
const styles = theme => ({
  root: { display: 'flex',
alignItems: 'center',
paddingLeft: '35px'
}
});

ErrorComp.propTypes = {
    classes: PropTypes.object.isRequired
  };
  

export default withStyles(styles)(ErrorComp);
