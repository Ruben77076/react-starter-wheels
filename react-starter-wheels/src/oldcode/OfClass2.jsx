import React from "react";

class OfClass extends React.Component
{
    state={name:"nothing"};

    onNavClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        let myNodeName = e.currentTarget.nodeName;
        console.log(myNodeName,e.currentTarget);
        //console.log(e.currentTarget.nodeName,e.currentTarget);    
    };
    
    logSomething = (something) => {

    }



    componentDidMount() {
        this.setState(()=>{return {name: "potato"}});
        this.logSomething = (anArg)=>
            {
                console.log("class",{anArg});
            };
    }

    onSomethingElseClicked = e => {
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        console.log(e.currentTarget.nodeName,e.currentTarget);
    };

    render()
    {
        return 
        (
            <React.Fragment>
                <nav 
                onNavClick={this.onNavClick}
                className="navbar navbar-expand-lg bg-light"
                aria-label="Eighth navbar example"
                >
                    <div className="container">
                       <button className="navbar-brand btn btn-outline-primar">Class Component</button>
                       <button 
                       className="navbar-toggler"
                       type="button"></button>
                    </div>
                </nav>
                <div 
                className="container"
                onClick={this.onSomethingElseClicked}>
                    <div className="row">
                        <div className="col">
                            <h1>
                                Keep <mark>this</mark>in scope.{this.state.name}
                            </h1>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
export default OfClass;