import React from "react";
import "./styles.css";
import ShowBattles from './ShowBattles';
import Header from './Header';
import Home from './Home';
import axios from 'axios';

class App extends React.Component {

  state={
    allBattles:[],
    king:"",
    location:"",
    type:"",
    count:null,
    isCountShowing:false
  }
  onRequestCountHandler = () =>{
    axios.get("http://127.0.0.1:5000/api/battle/count").then((res)=>{
      this.setState({count:res.data.count, isCountShowing:true})
    }).catch((err)=>{
      console.log("error is ",err)
    })
  }
  componentDidMount(){
    axios.get("http://127.0.0.1:5000/api/battle/list").then((res)=>{
      this.setState({allBattles:res.data.battles})
    }).catch((err)=>{
      console.log("error is ",err)
    })
  }

  kingHandler=(e)=>{
    this.setState({king:e.target.value})
  }

  locationHandler=(e)=>{
    this.setState({location:e.target.value})
  }

  typeHandler=(e)=>{
    this.setState({type:e.target.value})
  }
 //&location=${this.state.location}&type=${this.state.type}
  onRequestHandler=()=>{
    let value = "?";
    if(this.state.king.length !== 0){
      value = value + 'king=' + this.state.king + '&';
      console.log(value);
    }
    if(this.state.location.length !== 0){
      value = value + 'location=' + this.state.location + '&';
      console.log(value);
    }
    if(this.state.type.length !== 0){
      value = value + 'type=' + this.state.type + '&';
    }
    axios.get(`http://127.0.0.1:5000/api/battle/search${value}`).then((res)=>{
      this.setState({allBattles:res.data.battles})
    }).catch((err)=>{
      console.log("error is ",err)
    })
  }

  render() {

    const handleForce = (data, fileInfo) => this.setState({allBattles:data});
    console.log("khdhdd ",this.state.king);
    const papaparseOptions = {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    return (
      <div className="container">
        <Header/>
        <Home kingHandler={this.kingHandler} locationHandler={this.locationHandler} typeHandler={this.typeHandler} onRequestHandler={this.onRequestHandler} onRequestCountHandler={this.onRequestCountHandler}/>
        {this.state.isCountShowing ? <div>The count is {this.state.count}</div> : null}
        <ShowBattles allBattles={this.state.allBattles}/>
      </div>
    );
  }

}

export default App;
