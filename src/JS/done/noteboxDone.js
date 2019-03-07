import  React from 'react';
import NoteitemDone from "./noteitemDone";
const  NoteboxDone =(props)=> {
        return (
            <div className="todolist" >
                <ul id="done-items">
                    {
                        props.Note.map((data)=> {
                             return (
                                 <NoteitemDone key = {data.data.id} data = {data.data} RemoveItem={props.RemoveItem}/>
                             )
                        }

                        )
                    }
                </ul>
            </div>
        );
    }

export default    NoteboxDone;