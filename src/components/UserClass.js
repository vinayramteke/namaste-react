//learning to make class based components

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-container">
        <h3>{this.props.name}</h3>
        <h3>Name</h3>
        <h3>Name</h3>
        <h3>Name</h3>
      </div>
    );
  }
}
export default UserClass;
