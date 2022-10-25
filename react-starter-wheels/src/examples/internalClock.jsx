import React from "react";
import Clock from 'react-clock';
import WMessage from "../generic/WelcomeMessage"
class InternalClock extends React.Component{
    render(){
        return <React.Fragment>
        <WMessage></WMessage>
                <Clock value={new Date()} size={150} renderNumbers={true}></Clock>;

        </React.Fragment> 
    }
}

export default InternalClock;