////////////////////
//toggle component
///////////////////
class ReactBit extends React.Component {
  //initialize state
  constructor(props) {
    super(props);
    this.state = {toggle: "off"};
  } 

  //method that when called, toggles
  button_switch(){
    if(this.state.toggle=="off"){
      this.setState({
        toggle: "on"
      });
      document.getElementById("react-app1").style.color="green";
    }
    else{
      this.setState({
        toggle: "off"
      });
      document.getElementById("react-app1").style.color="black";
    }
  }

  //render to DOM, div containing button with bound function and the text that is updated
  render() {
      return (
        <div id="states-div">
          <div id="button"><button onClick={this.button_switch.bind(this)}>Click Me</button></div>
          <div id="react-app1">The toggle state is {this.state.toggle}</div>
        </div>
      );
  }
}

//acquire holding and render
const holder = document.querySelector('#states-div');
ReactDOM.render(<ReactBit/>, holder);

//////////////////////////
//clock component
//////////////////////////
class Clock extends React.Component{
  //initialize current time
  constructor(props){
    super(props);
    this.state = {time:new Date()};
  }

  //method to update state with new time
  updateTime(){
    this.setState({
      time:new Date()
    });
  }

  //lifecycle method that triggers on render, an interval function to keep updating every second
  componentDidMount(){
    setInterval(this.updateTime.bind(this),1000);
  }

  //render string containing time in the current state
  render(){
    return(
      <p id="the-time">The time is now {this.state.time.toLocaleTimeString()}</p>
    );
  }
}

//get hold and render clock
const holder2 = document.getElementById("clock");
ReactDOM.render(<Clock/>, holder2);
