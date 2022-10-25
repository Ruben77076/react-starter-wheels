import React from "react";

function WelcomeMessage(props)
{
    let end = <strong>Today</strong>;
    let now = new Date().getSeconds();
    //let nowMinutes = new Date().getMinutes();

    return <React.Fragment>
        <strong>
            Sup dawgs {props.user.firstName}, thanks for coming {end}: 
        </strong>
        <div>{props.extra}</div>
        <div>{props.end}</div>
        <div>{now}</div>
    </React.Fragment>
}

export default WelcomeMessage;