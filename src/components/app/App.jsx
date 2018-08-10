import React from "react";
import GuestHeader from "../headers/GuestHeader";
import AppRouter from "./AppRouter";

class App extends React.Component {

  render() {
    return (
      <div>
        <GuestHeader />
        <AppRouter store={this.props.store} />
      </div>
    );
  }
}

export default App;
