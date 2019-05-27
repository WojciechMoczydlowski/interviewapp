import React, { Component } from "react";
import Error from "./Error";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import ActionButton from "./ActionButton";
import {
  changeNickname,
  changeEmail,
  changeIpadress
} from "../../../redux/actions/formActions";
import {
  addUser,
  deleteUserList
} from "../../../redux/actions/userListActions";

class Form extends Component {
  handleNicknameChange = event => {
    this.props.changeNickname(event.target.value);
  };
  handleEmailChange = event => {
    this.props.changeEmail(event.target.value);
  };
  handleIpadressChange = event => {
    this.props.changeIpadress(event.target.value);
  };

  handleAddUser = event => {
    event.preventDefault();
    
    const nickname = this.props.nickname;
    const email = this.props.email;
    const ipadress = this.props.ipadress;
    const users = this.props.users;
    let validationComplete = true;

    if(!this.validateEmail(email)){
      validationComplete = false;
      console.log('validateEmail');
    };
    if(!this.uniqueEmailValidator(users,email)){
      validationComplete = false;
      console.log('uniqueEmailValidator');
    };
    if(!this.validateIpadress(ipadress)){
      validationComplete = false;
      console.log('validateIpadress');
    };
    if(!this.uniqueIpadressValidator(users,ipadress)){
      validationComplete = false;
      console.log('uniqueIpadressValidator');
    };
    if(validationComplete){
      this.props.addUser({nickname, email, ipadress});
      this.props.changeNickname('');
      this.props.changeEmail('');
      this.props.changeIpadress('');
    }
  };

  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validateIpadress = ipadress => {
    let re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return re.test(String(ipadress));
  };

  uniqueEmailValidator = (users,email) =>{
    let result = users.find(item => item.email === email);
    return result === undefined ? true : false;
  }

  uniqueIpadressValidator = (users,ipadress) =>{
    let result = users.find(item => item.ipadress === ipadress);
    return result === undefined ? true : false;
  }

  handleDeleteList = event => {
    event.preventDefault();
    console.log("deleteuser");
  };
  render() {
    console.log(this.props.users);
    const { classes } = this.props;
    const {nickname , email , ipadress} = this.props;
    const displayError = false;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.flexWrapperRow}>
          <TextField
            value = {nickname}
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
            value = {email}
            label="Email"
            className={classes.textField}
            // value={values.name}
            onChange={this.handleEmailChange}
            margin="normal"
          />
          <Error message="nickname errror" display={displayError} />
        </div>
        <div className={classes.flexWrapperRow}>
          <TextField
            value = {ipadress}
            label="IP adress"
            className={classes.textField}
            //value={values.name}
            onChange={this.handleIpadressChange}
            margin="normal"
          />
          <Error message="nickname errror" display={displayError} />
        </div>
        <div className={classes.flexWrapperRow}>
          <ActionButton
            backgroundColor="#23DBBB"
            title="Add user"
            handleClick={this.handleAddUser}
          />
          <ActionButton
            backgroundColor="red"
            title="Delete list"
            handleClick={this.handleDeleteList}
          />
        </div>
      </form>
    );
  }
}
const styles = theme => ({
  root: {},
  container: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    width: "300px"
  },
  flexWrapperRow: {
    display: "flex",
    flexDirection: "row"
  }
});

const mapStateToProps = state => ({
  nickname: state.form.nickname,
  email: state.form.email,
  ipadress: state.form.ipadress,
  users: state.userList.usersArr,
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
    },
    addUser: user => {
      dispatch(addUser(user));
    },
    deleteUserList: () => {
      dispatch(deleteUserList());
    }
  };
};

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Form);
