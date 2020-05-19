import React, {Component} from 'react';
import {render} from 'react-dom';
 
export default class ToDoListItems extends React.Component
{

constructor(props){
  super(props);
}
  
  render(){
      const {items} =  this.props;
    return(
     <div className='list'>
        { 
        items && items.map((item) => (
              <div className="item" key={item}>{item}</div>
            ))
        }
       
        </div>
    )
  }
}

 