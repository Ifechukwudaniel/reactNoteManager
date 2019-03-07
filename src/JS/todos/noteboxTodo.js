import  React  from 'react';
import NoteitemTodo  from './noteitemTodo';
const   NoteboxTodo =(props) => {
        return (
            <div className="todolist not-done" >
                   <ul id="sortable">
                       {
                           props.Note.map((data)=> {
                                   return (
                                       <NoteitemTodo  key = {data.data.id} data = {data.data}  ThisMark = { props.ThisMark }/>
                                   )
                               }

                           )
                       }
                   </ul>
            </div>
        );
}

export default    NoteboxTodo;