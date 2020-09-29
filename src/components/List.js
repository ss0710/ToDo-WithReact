import React,{Component} from 'react';
import '../styles/list.css';

class List extends Component {

  constructor(props){
    super(props);
    this.state={
      CHECK : "fa-check-circle",
      UNCHECK : "fa-circle-thin",
    }
  }
    
   
    

    render(){
        console.log(this.props.note);
    return(
        <div className="div_list">
         <ol>
             {
               this.props.note.map((itemvalue)=>{
                              
                const DONE = itemvalue.status ? this.state.CHECK : this.state.UNCHECK;
                const line = itemvalue.status ? "linethrough" : "";
                const li = itemvalue.status ? "li_done" : "li_pending";
                  
               return <li className={li} key={itemvalue.key}>
                 <div className="li_div">
                    <i className={`fa ${DONE} co`} onClick={() => this.props.status(itemvalue.key)}></i>
                    <i className="far fa-trash-alt" onClick={() => this.props.delete(itemvalue.key)}></i>
                    <h3 className={`${line}`}>{itemvalue.text}</h3>
                    <h4 className={`${line}`}>{itemvalue.task}</h4>
                    </div>
            </li>;
               })
             }
         </ol>
        </div>
    );
    }
}

export default List;