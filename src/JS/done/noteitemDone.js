import  React  from 'react';
const  NoteitemDone  = (props) =>  {
        return (
            <div id = {props.data.id}>
                <li>
                    {props.data.Note}
                    <button id= {props.data.id} className=" w3-red remove-item btn btn-default btn-xs pull-right"
                     onClick={props.RemoveItem}>
                        <span id= {props.data.id} className="glyphicon glyphicon-remove"></span>
                    </button>
                </li>
            </div>
        );
    }

export default    NoteitemDone;