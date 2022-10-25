//#region  *****1st Clock*****
// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// import InternalClock from "./examples/internalClock";
// import 'react-clock/dist/Clock.css';

// function App() {
//   const renderNumber = () =>{return 1+1}
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Heyyyy world. *besos*        </p>
//         <InternalClock></InternalClock>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <strong>{renderNumber()}</strong>
//       </header>
//     </div>
//   );
// }
//export default App;
//#endregion

//#region ****Disney test one****
// import Disney from "./examples/Disney";

// class App extends React.Component{
//   state = {
//     currentUser: {
//         firstName: "Mickey"
//         , lastName: "Mouse"
//         , friends: [{ name: "Minnie" }, { name: "Pluto" }]
//         , age: 80
//     },
//     other: { "prop": "Same" },
//     somethingElse: "Same"
// };

// sayHello = (msg) =>
// {console.log(msg);}
//   render()
//   {
//     /* let friendMsg = `Count of Friends: ${this.state.currentUser.friends.length}`; */
//     //this.sayHello();
//     this.sayHello("from App component")
//     return(
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <Disney
//           friend={this.state.currentUser}
//           showGreeting={this.sayHello}></Disney>

//         </div>
//----------------------------------
// import Disney from "./examples/Disney";

// class App extends React.Component{
//   state = {
//     currentUser: {
//         firstName: "Mickey"
//         , lastName: "Mouse"
//         , friends: [{ name: "Minnie" }, { name: "Pluto" }]
//         , age: 80
//     },
//     other: { "prop": "Same" },
//     somethingElse: "Same"
// };

// sayHello = (msg) =>
// {console.log(msg);}

// componentDidMount()
// {
//   console.log("componentDidMount");
//   console.log(this.state);

// // this.state.currentUser.firstName="Michael";
// //var newUser = {...this.state.currentUser}
// //newUser.firstName = "Michael";
// //this.setState({currentUser:newUser, apples: "I love apples"});

// //var newState = {currentUser:newUser};

// //var updater = (prevState,props) =>
// this.setState(prevState =>
// {
//   let currentUser = {...prevState.currentUser};
//   currentUser.firstName = "Michael";
//   const newfriends =[...currentUser.friends,{name:"Goofy"}];
//   currentUser.friends= newfriends;
//   return{currentUser};
// });
// //this.setState(updater);

// }
//   render()
//   {
//     /* let friendMsg = `Count of Friends: ${this.state.currentUser.friends.length}`; */
//     //this.sayHello();
//     this.sayHello("from App")
//     return(
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <Disney
//           friend={this.state.currentUser}
//           showGreeting={this.sayHello}></Disney>

//         </div>

//         <p>Heyyyy world. *besos*        </p>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//       </header>
//     </div>
//     );
//   }
// }

//#endregion
//#region ****OfClass/Functional****
// import React from "react";
// import "bootstrap/dist/js/bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import OfClass from "./components/OfClass";
// import Functional from "./components/Functional";

// function App() {

//   return (
//     <div className="container">
//       <div className="row align-items-start">
//         <div className="col">
//           <OfClass></OfClass>
//         </div>
//         <div className="col">
//           <Functional></Functional>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
//#endregion
//#region ****Disney Clicks & Axios****
/* import Disney from "./examples/Disney";
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

export default App; */
//#endregion
//#region
//#endregion
//#region
//#endregion
//#region
//#endregion
//#region
//#endregion
//#region
//#endregion
