import React,{Component} from 'react';
import '../styles/form.css';
import Team from '../assets/team.png';
import {Link} from 'react-router-dom';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            heading:"",
            work:""
        }
        this.headingHandler = this.headingHandler.bind(this);
        this.workHandler = this.workHandler.bind(this);
    }

    headingHandler(event){
        this.setState({
            heading:event.target.value
        })
    }

    workHandler(event){
        this.setState({
            work:event.target.value
        })
    }

    render(){
    return(
        <div className="div_form">
            <div className="img_div">
                <img src={Team} alt="team" width="100%" height="230px"/>
            </div>
            <div className="input_div">
                <div className="heading_input">
                    <input type="text" placeholder="Heading.." value={this.state.heading} onChange={this.headingHandler}/>
                </div>
                <div className="list_input">
                    <textarea type="text" placeholder="Add A Note.." value={this.state.work} onChange={this.workHandler}/>
                </div>
                <div className="button_div">
                <Link to='/' name="sudheer singh"><button type="button" onClick={()=>this.props.getHeading(this.state.heading,this.state.work)}>Add</button></Link>
                </div>
            </div>
        </div>
    );
}
}

export default Form;