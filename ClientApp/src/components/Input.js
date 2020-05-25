import React from 'react';
import './date.css';

export class Input extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = event =>{
        this.props.onChange(event.target.name, event.target.value);
    };
    render(){
        const type = this.props.type;
        const name = this.props.name;
        const placeholder = this.props.placeholder||'';
        return(
            <>
            <input type={type} id={`${type}_${name}`} name={name} placeholder={placeholder} value={this.props.value} onChange={this.handleChange} autoComplete={'new-password'}/>
            <div className={'after-input'} />
            </>
        );
    }
}