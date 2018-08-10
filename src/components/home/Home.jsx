import React from "react";
import Login from "../user/Login";

export default class Home extends React.Component {

  myAlert(greeting) {
    alert(greeting);
  }

  render() {
    return (
      <div>
        Wellcome to our app
        <Login myAlert={this.myAlert} />
      </div>
    );
  }
}
