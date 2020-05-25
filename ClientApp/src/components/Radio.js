import React from "react";
import './radio.css';

export class Radio extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const name = this.props.name;
        const value = this.props.value;
        const status= (this.props.chosen===this.props.name) ? 'checked' : '';
        return (
            <>
                <div className={`radio ${status}`} id={`radio_${name}`} content={value} onClick={()=>{this.props.onChange(this.props.item, this.props.name);}}/>
            </>
        );
    }
}