import  React  from 'react';
import { Link } from "react-router-dom";
import { firebase  } from "../../firebase";
import NoteboxTodo   from './noteboxTodo';
const   ContentbodyTodo =(props)=>  {
    const   signOut = () => {
        firebase.auth().signOut()
    }
        return (
            <div className="col-md-6">
                <div className="todolist not-done w3-card-24">
                    <div className="w3-container w3-center">
                    <h1 > Todos</h1>
                    </div>
                    <input id="add" type="text" className="form-control add-todo" placeholder="Add todo"/>
                    <button  className=" w3-blue remove-item btn btn-default btn-xs pull-right" onClick={props.AddItem}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                       <br/>
                        <button id="checkAll" className="btn btn-success" onClick={props.AllMark} >Mark all as done</button>
                    <NoteboxTodo  Note = {props.Note} ThisMark ={props.ThisMark}/>
                     <br/>
                     <Link onClick={signOut} to="/logout" className="btn btn-danger">Log out </Link>
                </div>
            </div>
        );

    }

export default   ContentbodyTodo;