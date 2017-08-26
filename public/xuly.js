function getname(name){
  return alert(name);
}
var Chao = React.createClass({
  hienthongbao:function(){
      alert(this.props.ten);
  },
  themHocVien(){
    this.state.tongHocVien = parseInt(this.state.tongHocVien) +1;
      this.setState(this.state);
  },
  //cach 2
  //themHocVien(){
  //    this.setState({tongHocVien: parseInt(this.state.tongHocVien) + 1});
  //},
  //Vi du ve state trong React
  //--------------------------------------------------//
  getInitialState(){
    return {tongHocVien: this.props.tongHocVien};
  },
  //ham render trong react
  render:function(){
    return(
      <div>
      <h1 className = "mauvang" >{this.props.ten}</h1>
      <div>so hoc vien la:{this.state.tongHocVien}</div>
      <button onClick={()=>getname(this.props.ten)}>hien thong bao</button>
      <button onClick={this.themHocVien}>Them</button>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
  <Chao ten="BMW" tongHocVien="10"/>
  <Chao ten="toyota" tongHocVien="20">maria</Chao>
  <p>-----------------------------------------------------------</p>
  <h1 className = "mauvang"> Hello mac dinh </h1>
  </div>
  , document.getElementById('root'));
