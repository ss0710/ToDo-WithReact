import React,{Component} from 'react';
import '../styles/About.css';

class About extends Component{
    render(){
        return(
            <>
            <div className="about_div">
                <div className="animate">
                <div className="animation_div">
                    <p> SCHEDULE <br/>YOUR <br/>DAY</p>
                </div>
                <div className="about_lines">
                    <h3>TO DO LIST APPLICATION</h3><br/>
                    <p>To do list is an application where you can add , delete and mark a task done. This helps to plan you day in more efficient way.</p><br/>
                    <p>Go to Add Note Type a heading and a task and Add it to list.Tap on the green circle to mark it as done and Tap on delete icon to delete that task.</p><br/>
                </div>
                </div>
            </div>
            </>
        );
    }
}

export default About;