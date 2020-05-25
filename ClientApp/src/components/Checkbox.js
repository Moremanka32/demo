import React from "react";
import './checkbox.css';

export class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange =()=>{
        let array = this.props.array;
        let value = this.props.name;
        let index = array.indexOf(value);
        if (index >- 1) { 
            array.splice(index,1);
        } 
        else { 
            array.push(this.props.name);
        }
        this.props.onChange(this.props.item, array);
    };
    render(){
        const name = this.props.name;
        const value = this.props.value;
        const status = (this.props.array.indexOf(value)>-1) ? 'checked' : '';
        return (
            <div className={`checkbox ${status}`} id={`checkbox_${name}`} content={value} onClick={this.handleChange}/>
        );   
    }
}