import React,{useState} from "react";

function Functional()
{
    const [name,setName]=useState("nothing");
    const onNavClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        let myNodeName = e.currentTarget.nodeName;
        console.log("fx",e.currentTarget.nodeName,e.currentTarget,);
        //logSomething(e.currentTarget.nodeName);

        setName(() =>{return myNodeName;});

};
    const onSomethingElseClicked = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        let myNodeName = e.currentTarget.nodeName;

        //props.onParentNotified(e,myNodeName)
        setName(() =>{return myNodeName;});
        // console.log("fx",myNodeName,e.currentTarget,);
        //logSomething(e.currentTarget.nodeName);

};
    const logSomething=(anArg)=>
{
    console.log("fx",{anArg});};
}
return ("Hi");
    // <React.Fragment>
    //             <nav 
    //             //onClick={onNavClick}
    //             className="navbar navbar-expand-lg bg-light"
    //             aria-label="Eighth navbar example"
    //             >
    //                 <div className="container">

    //                 </div>
    //             </nav>
    //             <div 
    //             className="container"
    //             </React.Fragment>onClick={onSomethingElseClicked}>
    //                 <div className="row">
    //                     <div className="col">
    //                         <h1>
    //                             NO <mark>this</mark>in functional components.{name}
    //                         </h1>
    //                     </div>
    //                 </div>

    //             </div>
    //         </React.Fragment>
    //);
         

export default Functional;
    

