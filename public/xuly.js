const friends = [
    {id:1, name: 'Dave',age:50},
    {id:2,name: 'Kellie',age:42},
    {id:3,name: 'Max',age:12},
    {id:2,name: 'Jack',age:12}
];
var Note = React.createClass
(
  {
  render()
    {
      return (
        <p>hello my friend</p>
              );
    }
  }
);
var List = React.createClass(
  {
    getInitialState(){
      return({mang: friends});
    },
    add(){
      this.state.mang.push("node js");
      this.setState(this.state);
    },
  render(){
    return(
      <div>
      <button onClick={this.add}>Them</button>
      {
        this.state.mang.map((note,chiso)=><h1 key={chiso}>{note.id}-{note.name}</h1>)
      }
      </div>
    )
  }
});
ReactDOM.render(
  <div>
  <List/>
  </div>
  , document.getElementById('root'));
