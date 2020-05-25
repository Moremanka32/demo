import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './home.css';

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
      super(props);
      this.animateShape = this.animateShape.bind(this);
  }
  animateShape = target=>{
      let shapeId;
      switch(target){
          case 'form-link':{
              shapeId = 'squad';
              break;
          }
          default:{
              shapeId='sun';
          }
      }
      document.getElementById(shapeId).classList.toggle('active');
  };
  
  render () {
    return (
      <div id={'wrapper-home'}>
          <div id={'sun'}/>
          <div id={'squad'}/>
        <div id={'demo'}>
            <div id={'dashboard-link'}>DASHBOAR__</div>
            <div id={'rectangle'} />
            <div id={'triangle'} />
            <div id={'people-link'}>P _OPLE</div>
            <Link to={'/form'} id={'form-link'} onMouseOver={(e)=>{this.animateShape(e.target.id);}} onMouseLeave={(e)=>{this.animateShape(e.target.id);}}>FOR__</Link>
            <div id={'notes-link'}>N_TES</div>
        </div>
      </div>
    );
  }
}
