import React from "react";
import "./App.css";
import Disney from "./examples/Disney";
import * as blogService from "./services/blogServices";
//import * as carService from "./services/carsServices";

class App extends React.Component {
  state = {
    currentUser: {
      firstName: "Mickey",
      lastName: "Mouse",
      friends: [{ name: "Minnie" }, { name: "Pluto" }],
      age: 80,
    },
    other: { prop: "Same" },
    somethingElse: "Same",
  };
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.state);

    const payload = {
      id: 1463163017,
      authorId: 1783809011,
      title: "My Sabio Life 22JUL22",
      content: "Changed using JSX",
    };
    const id = 1463163017;
    const dltId = 2010126934;

    //blogService.getUser(payload).then(this.onSuccess).catch(this.onError);

    //carService.getPing().then(this.onSuccess).catch(this.onError);
    blogService.getBlogs().then(this.onSuccessBlog).catch(this.onErrorBlog);

    blogService
      .updateBlog(id, payload)
      .then(this.onSuccessUpdate)
      .catch(this.onErrorUpdate);

    blogService
      .dleetBlog(dltId)
      .then(this.onSuccessDleet)
      .catch(this.onErrorDleet);

    blogService.getBlogs().then(this.onSuccessBlog).catch(this.onErrorBlog);

    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.firstName = "Michael";
      const newfriends = [...currentUser.friends, { name: "Goofy" }];
      currentUser.friends = newfriends;
      return { currentUser };
    });
  }

  onSuccessBlog = (response) => {
    console.log("Got blogs", response);
  };
  onErrorBlog = (err) => {
    console.log("Blogs err", err);
  };
  onSuccessUpdate = (response) => {
    console.log("Updated blogs", response);
  };
  onErrorUpdate = (err) => {
    console.log("BlogsUPDATE err", err);
  };
  onSuccessDleet = (response) => {
    console.log("Goodbye blogs", response);
  };
  onErrorDleet = (err) => {
    console.log("BlogsDELETE err", err);
  };

  sayHello = (msg) => {
    console.log(msg);
  };

  onLastNameClicked = () => {
    console.log("LName Clicked");

    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.lastName = "Ramirez";
      return { currentUser };
    });
  };

  onRemFriendsClicked = () => {
    console.log("Remove Friends Clicked");

    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.friends = [];
      return { currentUser };
    });
  };

  render() {
    this.sayHello("from App");
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Disney
              name={this.state.currentUser.firstName}
              friend={this.state.currentUser}
              showGreeting={this.sayHello}
            />
          </div>
          <div>
            <button onClick={this.onLastNameClicked}>Change Last Name</button>
            <button onClick={this.onRemFriendsClicked}>
              Remove All Friends
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

