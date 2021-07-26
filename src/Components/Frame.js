import React from 'react';
import '../Static/Frame.css';
import Screen from './Screen';
import Wheel from './Wheel'

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="frame">
                <Screen />
                <Wheel />
            </div>
        );
    }
}
 
export default Frame;


