import React ,{useState} from "react";

function Functional() {
  //#region 
  //const [state,setState]= useState({age: 30});
  // const onClickOne = e =>{
  //   console.log("onClickOne in FXnal")
  //   e.preventDefault();
  //   setState((prevState) =>{
  //     return {age: prevState.age+1,win: true}
  //   } );
    
  // }
  
  
  
  // const [state]= useState({age:30, firstName: "Gregorio"});
  // const [company]= useState({empCount: 1000, name: "Acme"});
  
  
  // const [isOn] = useState(true);
  // const [countOfEmps] = useState(1520);
  // const [street] = useState("100 Main street");
  // const [myGroupOfThings] = useState([1,2]);
  // const [myGroupOfThings2] = useState([1,2]);
  //#endregion
const [user,setUser]=useState({
  age:30, firstName: "Gregorio"
  
});
const [company]=useState({  
  empCount:1000, name:"Acme"
});

const onUpdateUser = e =>{
    console.log("onClickOne in FXnal")
    e.preventDefault();
    setUser((prevState) =>{
      return {...prevState,age: prevState.age+1,win: true}
    } );
  };

/* const onClickTwo = (e) =>{
  console.log("onClickOne in Functional");
  e.preventDefault();
  setState((prevState)=>{
    return {...prevState,age: prevState.age+1, win:true};
  })
} */

  
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg  bg-light"
        aria-label="Eighth navbar example"
      >
        <div className="container">
          <button className="navbar-brand btn btn-outline-primar">
            SM in FX{" "}
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active btn-link btn "
                  aria-current="page"
                  // onClick={onClickOne}
                >
                  Command 1
                </button>
              </li>
              <li className="nav-item">
                <button 
                className="nav-link active btn-link btn "
                onClick={onUpdateUser}>
                  Command 2
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn-link btn ">
                  Command 3
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container">
        <div className="row">
          <div className="col">
          Age?: <span>{user.age}</span>            
          </div>
          <div className="col">            
          Name?:<span>{user.firstName}</span>
          </div>
          {company &&(
          <div className="col">            
            CO?:<span>{company.name}</span>
          </div>
          )}
        </div>
        </div>
    </React.Fragment>
  );
}

export default Functional;