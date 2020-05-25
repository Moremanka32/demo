import React from 'react';
import './svg.css';

export class Svg extends React.Component{
  constructor(props) {
   super(props);
  }
  render(){
   const value = this.props.value;
   return(
       <div id={'svg'}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 994.3 905.68">
               <text className="cls-1">{value}</text>
               <text className="cls-1-1">{value}</text>
               <text className="cls-1-2">{value}</text>

               <text className="cls-2">{value}</text>
               <text className="cls-2-1">{value}</text>
               <text className="cls-2-2">{value}</text>

               <text className="cls-3">{value}</text>
               <text className="cls-3-1">{value}</text>
               <text className="cls-3-2">{value}</text>
           </svg>
       </div>
   );
  }
}