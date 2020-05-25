import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from './Input';
import {Select} from './Select';
import {Radio} from './Radio';
import {Checkbox} from './Checkbox';
import {Svg} from './Svg';
import './form.css';

const _options = ['Prey', 'Dishonored', 'Plague Tale', 'Death Stranding', 'Ruiner', 'Ghost Recon'];
const _layouts = ['grid', 'flexbox', 'float', 'table'];

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login:'',
            password:'',
            date:'',
            game:'',
            layouts:[],
            side:'',
            svg:'FORM'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleReset=()=>{
        this.setState({
            login:'',
            password:'',
            date:'',
            game:'',
            layouts:[],
            side:'',
            svg:'FORM'
        });
    };
    handleSubmit = event=>{
        event.preventDefault();
        document.getElementById('container-form').classList.add('active');
        setTimeout(()=>{
            this.setState({
                svg:'SENT'
            });
            document.getElementById('container-form').classList.remove('active');
            document.getElementById('container-form').classList.add('done');
        }, 1000);
        setTimeout(()=>{
            this.handleReset();
            document.getElementById('container-form').classList.remove('done');
        }, 2000);
    };
    handleChange = (item,value)=>{
        this.setState({[item]:value})
    };
    render(){
        return(
            <div id={'wrapper-form'}>
                <Link to={'/'} id={'menu-squad'} />
                <div id={'container-form'}>
                    <Svg value={this.state.svg} />
                    <form id={'form'} onSubmit={this.handleSubmit}>
                        <span className={'header'}>Login Info</span>
                        <div className={'section-form'}>
                            <label>login:</label>
                            <Input type={'text'} name={'login'} placeholder={''} value={this.state.login} onChange={this.handleChange}/>
                        </div>
                        <div className={'section-form'}>
                            <label>password:</label>
                            <Input type={'password'} name={'password'} value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <span className={'header'}>Additional Info</span>
                        <div className={'section-form'}>
                            <label>random date:</label>
                            <Input type={'date'} name={'date'} value={this.state.date} onChange={this.handleChange}/>
                        </div>
                        <div className={'section-form'}>
                            <label>latest game:</label>
                            <Select name={'game'} value={this.state.game} options={_options} onChange={this.handleChange}/>
                        </div>
                        <div className={'section-form grid'}>
                            <label>used layouts:</label>
                                {_layouts.map(layout=>
                                    <Checkbox name={layout} value={layout} item={'layouts'} array={this.state.layouts} onChange={this.handleChange} />
                                )}
                            </div>
                        <div className={'section-form grid-s'}>
                            <label>preferred side:</label>
                                <Radio name={"left"} value={'left'} item={'side'} chosen={this.state.side} onChange={this.handleChange} />
                                <Radio name={"right"} value={'right'} item={'side'} chosen={this.state.side} onChange={this.handleChange} />
                        </div>
                        <div className={'section-form'}>
                            <div id={'submit-button'} onClick={this.handleSubmit}>
                                { [...Array(5)].map((e,i)=>
                                <div key={`key_submit_form_${i}`}>submit</div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
                <footer>
                    <div id={'left-control'}/>
                    <div id={'right-control'}/>
                </footer>
            </div>
        );
    }
}