import  React  from 'react';
import { Link } from "react-router-dom";
import NoteboxDone   from './noteboxDone';
const  ContentbodyDone  = (props) =>  {
        return (
            <div className="col-md-6">
                <div className="todolist not-done w3-card-24">
                    <h1> Already Done </h1>
                    <NoteboxDone  Note = { props.Note} RemoveItem = {props.RemoveItem}/>
                    
                    <Link to="/logout" className="btn btn-danger">Log out </Link>
                </div>
            </div>
        );

    }

export default   ContentbodyDone;