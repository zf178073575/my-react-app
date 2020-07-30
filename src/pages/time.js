import React,{userState} from 'react';
import {Button,Input} from 'antd';


function HelloMessage(props){
  return <h1>Hello {props.name}!</h1>;
}
const element = <HelloMessage name="Runoob"/>;
const num = [2,4,6,7];

function Numbers(props){
  let arr = [1,2,3]
  const fn=()=> `aaaaaaa${arr.map((v)=>{return `25${v}`})}`
  console.log(fn(arr));
  const number = props.num;
  const list = number.map((number)=>
  <li key={number.toString}>{number}</li>
  );

  return (
  <ul>{list}</ul>
  );
}



export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"zf",
        age:"29",
        isToggleOn: true,
        count :0,
        value :"adasd"
      }; 
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }  
   
    handleChange(event){
      this.setState({value : event.target.value});
    }
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
      return (
        <div>
          <Name name = {this.state.name}/>
          <Age age = {this.state.age}/>
          {element}
          <Button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </Button>
        <Numbers num={num}/>
        <p>{this.state.count}</p>
        <Button onClick={()=>this.setState({count:this.state.count +1})}>更新次数</Button>
        <Input type="text" value={this.state.value} onChange={this.handleChange} />
      <h4>{this.state.value}</h4>
        </div>
      );
    }
  }

  class Name extends React.Component{
    render(){
    return <h1>{this.props.name}</h1>
    }
  }
   
  class Age extends React.Component{
    render(){
    return <h2>{this.props.age}</h2>
    }
  }

  
 