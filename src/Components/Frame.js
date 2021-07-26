import React from 'react';
import '../Static/Frame.css';
import Screen from './Screen';

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="frame">
                <Screen />
            </div>
        );
    }
}
 
export default Frame;


