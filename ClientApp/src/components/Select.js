import React from "react";
import './select.css';

export class Select extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
                <select name={this.props.name} id={`select_${this.props.name}`} value={this.props.value} onChange={(e) => {this.props.onChange(this.props.name, e.target.value)}}>
                    {this.props.options.map(option =>
                        <option value={option}>{option}</option>
                    )}
                </select>
                <div className={'after-input'}/>
            </>
        );
    }
}