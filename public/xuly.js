function getname(name){
  return alert(name);
}
var Chao = React.createClass({
  hienthongbao:function(){
      alert(this.props.ten);
  },
  render:function(){
    return(
      <div>
      <h1 className = "mauvang" >{this.props.ten}</h1>
      <h1 className = "mauxanh" >{this.props.name}<p>{this.props.children}</p>{this.props.nghenghiep}</h1>
      <button onClick={()=>getname(this.props.ten)}>hien thong bao</button>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
  <Chao ten="dung cho"/>
  <Chao name="phoc" nghenghiep="that nghiep">maria</Chao>
  <h1 className = "mauvang"> Hello mac dinh </h1>
  </div>
  , document.getElementById('root'));
