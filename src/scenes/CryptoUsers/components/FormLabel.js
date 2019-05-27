import React, { Component } from "react";
import Error from "./Error";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

import { changeNickname , changeEmail, changeIpadress } from "../../../redux/actions/formActions";

class FormLabel extends Component {

  handleNicknameChange = (event) =>{
    this.props.changeNickname(event.target.value);
  }
  handleEmailChange = (event) =>{
    this.props.changeEmail(event.target.value);
  }
  handleIpadressChange = (event) =>{
    this.props.changeIpadress(event.target.value);
  }
  render() {
    const { classes } = this.props;
    const displayError = true;
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className={classes.flexWrapperRow}>
        <TextField
          id="standard-name"
          label="Nickname"
          className={classes.textField}
          //value={values.name}
           onChange={this.handleNicknameChange}
          margin="normal"
        />
        <Error message="nickname errror" display={displayError} />
      </div>
      <div className={classes.flexWrapperRow}>
        <TextField
          id="standard-name"
          label="Email"
          className={classes.textField}
          // value={values.name}
          onChange={this.handleEmailChange}
          margin="normal"
        />
        <Error message="nickname errror" display={displayError}  />
      </div>
      <div className={classes.flexWrapperRow}>
        <TextField
          id="standard-name"
          label="IP adress"
          className={classes.textField}
          //value={values.name}
          onChange={this.handleIpadressChange}
          margin="normal"
        />
        <Error message="nickname errror" display={displayError}  />
      </div>
    </form>
  );
}};
const styles = theme => ({
  root: {},
  container: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    width: "300px"
  },
  flexWrapperRow:{
    display: 'flex',
    flexDirection: 'row',
  }
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
    changeNickname: nickname => {
      dispatch(changeNickname(nickname));
    },
    changeEmail: email => {
      dispatch(changeEmail(email));
    },
    changeIpadress: ipadress => {
      dispatch(changeIpadress(ipadress));
    }
  };
};

FormLabel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(FormLabel);
