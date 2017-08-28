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
      return({mang:["hello","hi","xixi"]});
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
        this.state.mang.map(function(note,index)
        {
          return <h1 key={index}>{note}</h1>
        })
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
