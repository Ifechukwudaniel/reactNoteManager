import  React  from 'react';
const NoteitemTodo=(props)=>{
        return (
            <div>
                <hr/>
                <li className="ui-state-default">
                    <div className="checkbox">
                        <label>

                            <input type="checkbox"  value="" id={props.data.id} onClick={props.ThisMark}/>
                            {props.data.Note} 
                        </label>
                    </div>
                </li>
            </div>
        );
}

export default    NoteitemTodo;