function addDiv(){
alert(123);
};
var Note = React.createClass({
  render: function(){
    return (<div className="div-note">
            {this.props.children}
    </div>);
  }
});
var List = React.createClass({
  getInitialState(){
    return {mang:["vip1","vip2","vip3"]}
  },
  render(){
    return(
    <div className='div-list'>
      <button onClick={addDiv}>Them</button>
      <h1> Hello world !</h1>
      {
        this.state.mang.map((note,chiso)=><Note key={chiso}>{note}</Note>)
      }
    </div>
    )
  }
});

var InputDiv = React.createClass({
  send(){

  },
  render(){
    return(
      <div>
        <input type="text" ref="txt" placeholder="enter your note"></input>
        <button onClick={this.send}>Gui</button>
      </div>
    )
  }
});
ReactDOM.render(
  <div>
    <List/>
    <InputDiv />
  </div>
  , document.getElementById('root'));
