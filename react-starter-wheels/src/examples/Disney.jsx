import React from "react";

class Disney extends React.Component {
  constructor(props) {
    super(props);
    this.state = { localMessage: "I am Disney" };
  }

  getMessage = () => {
    return (
      <strong>Count of Friends: {this.props.friend.friends.length}</strong>
    );
  };
  // onLNameClick = e =>{
  //       console.log("LName Clicked")
  //       e.preventDefault();
  //       this.setState((prevState) =>{
  //         let currentUser ={...prevState.currentUser};
  //         currentUser.lastName = "Ramirez";
  //         return {lastName: prevState.lastName}
  //       } );
  //     }

  //   onLastNameClicked = () => {
  //     console.log("LName Clicked");

  //     this.setState((prevState) => {
  //       let currentUser = { ...prevState.currentUser };
  //       currentUser.lastName = "Ramirez";
  //       return { currentUser };
  //     });
  //   };

  render() {
    this.props.showGreeting(this.state.localMessage);

    return (
      <React.Fragment>
        <strong>
          Sup peeps {this.props.friend.firstName}, thanks for coming:
        </strong>
        <h1>{this.state.localMessage}</h1>
        <div>
          <span style={{ padding: "5px" }}>{this.props.friend.firstName}</span>
          <span style={{ padding: "5px" }}>{this.props.friend.lastName}</span>
          <h2>Count of Friends: {this.props.friend.friends.length}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Disney;
