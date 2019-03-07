import  React, {Component } from 'react';
import ContentbodyTodo  from './todos/ContentbodyTodo';
import ContentbodyDone  from './done/ContentbodyDone';
import Data from "../db"
import { firebase, firebaseDB} from "../firebase";

class  Container extends Component {
    state ={
        Note :Data
    }
       markall = () => {
         let Note =  this.state.Note.map((data)=>{
              if(data.Done === false) {
                  data.Done = true;
              }
              return data;
         })
           this.setState({
               Note
           })
     }
       markthis =(event) =>{
       let Data= this.state.Note.map((data)=>{
             console.log(data.id);
             console.log(event.target.id);
               if( data.id.toString() === event.target.id && data.Done === false) {
                   data.Done = true;
               }
               console.log(data)
               return data;
           })
           console.log(Data)
           this.setState({
             Note :Data
           })
       }
       AddItem=()=>{
          let  note =document.getElementById('add').value;
          if (note.trim() === "") {
            document.getElementById('add').focus(
            )   
          }
          else{
           let length = this.state.Note.length
           let Done = false
    
           document.getElementById('add').value= ""
            Data.push({
                "id" :length+1,
                "Note" : note,
                 "Done":Done
            })
            this.setState({
                Note :Data
            }   
            )
          }
       }
       RemoveItem=(event)=>{
           let id =  event.target.id
           delete Data[id-1]
           this.setState({
               Note :Data
           }   
           )  
        }
     

    // seperate the  notes that are done from the one that are  done
        seperate_Todo  = (AllNotes) =>{
        let TOdo = [];
        AllNotes.forEach((data)=>{
           if ( data.Done=== false){
               TOdo.push({data});
           }
        })
        return (
                <ContentbodyTodo header ="Todo" todoType=" Not done" Note={TOdo} 
                AllMark={this.markall} ThisMark={this.markthis}  AddItem ={this.AddItem} />
        )
    }
    // seperate the  notes that are not done from the one that are done
     seperate_Done = (AllNotes) =>{
        let Done =[];
        AllNotes.forEach((data)=>{
            if ( data.Done=== true){
                Done.push({data});
            }
        })

        return (
            <ContentbodyDone header ="Already Done" todoType="done" Note={Done}
             RemoveItem = {this.RemoveItem}   />
        )
    }
    render(){
        return (
          <div className ="container" >
              <div className ="row" >
                  {this.seperate_Todo(this.state.Note)}
                  {this.seperate_Done(this.state.Note)}
              </div>
          </div>
        );
      }
    }

export default  Container;
