import React,{Component} from 'react';
import '../styles/App.css';
import List from './List';
import Form from './Form';
import About from './About';
import Routing from './Routing';
import swal from 'sweetalert';
import {Route , Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

class App extends Component {

  constructor(props){ 
    super(props);
    this.state={
      item:[]
    }
    this.getHeading = this.getHeading.bind(this);
    this.delete = this.delete.bind(this);
    this.status = this.status.bind(this);
}

  delete(key){
    var filteredItem = this.state.item.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      item: filteredItem
    });
  }

  status(Key){
    console.log("status function caller");
    
    var updatedItem = this.state.item.map((tempItem)=>{
          var temp = Object.assign({},tempItem);
          if(temp.key===Key)
          {
          if(temp.status===false){
            temp.status = true;
          }else{
            temp.status = false;
          }
         }
         return temp;
        })

    // var updatedItem = () => {
    //   return this.state.item.map((tempItem));
    // }

    this.setState({
      item: updatedItem
    });
  }

  getHeading(heading,work){
    if((heading!=="")&&(work!==""))
    {
    console.log("heading = "+heading)
    
      var newItem = {
        text:heading,
        task:work,
        key:Date.now(),
        status:false
      };



      console.log("new item text = "+newItem);

      this.setState((prevState) => {
        return{
          item: prevState.item.concat(newItem),
        };
      });
      swal("excellent","Note Added successfully","success");
    }else{
      swal("something went wrong","Please fill all inputs and try again","error");
    }
  }

  render(){
  return (
    <div className="div_one">
      <div className="div_two">
        <Routing/>
        <Switch> 
            <Route exact path="/" component={() => <List note={this.state.item} delete={this.delete} status={this.status}/>}/>
            <Route path="/about" component={() => <About/>}/>
            <Route path="/form" component={() => <Form  getHeading={this.getHeading}/>}/>
        </Switch>
        <div className="about_button_div">
        <Link to='/about'><button type="button">ABOUT</button></Link>
        </div>
      </div>
    </div>
  );
}
}

export default App;
