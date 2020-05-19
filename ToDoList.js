import React, {Component} from 'react';
import {render} from 'react-dom';
import {ADDITEM, addItemAction} from './actions';
import {connect} from 'react-redux';
import ToDoListItems from './ToDoListItems';

class ToDoList extends React.Component
{

constructor(props){
  super(props);
  console.log(props);
  this.state = {
    item : "",
    items : this.props.items
  }
}
 
addItem = () => {
 this.props.dispatch(addItemAction({ payload : this.state.item }));
}

handleItemChage = () => {
  this.setState({
      item: event.target.value
    }) 
}
 
  render(){
     
    return(
      <div className="todo-container">
        <input id='todoitem' type='text' value={this.state.item} onChange={this.handleItemChage} /> <button onClick={this.addItem}>ADD </button>
        <ToDoListItems items={this.props.items} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    items : state.items
  };
}
 
export default connect(mapStateToProps)(ToDoList);