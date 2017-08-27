var Clickinc = React.createClass({
  tangso(){
    this.state.soHientai = parseInt(this.state.soHientai) +1 ;
    this.setState(this.state);
  },
  getInitialState(){
    return{soHientai: this.props.soHientai};
  },
  render:function(){
      return(
        <div>
          <button onClick={this.tangso}>Hello {this.state.soHientai}</button>
        </div>
      )
    }
});

var Album = React.createClass({
  getInitialState(){
    return{hinh: 1};
  },
  TangLenMot(){
    this.setState(()=>{if (this.state.hinh>3) {
      this.state.hinh =1;
      this.setState(this.state);

    } else {
      this.state.hinh = parseInt(this.state.hinh) +1;
      this.setState(this.state);
    }});
  },
  GiamXuongMot(){
    this.setState(()=>{if (this.state.hinh<2) {
      this.state.hinh = 4;
      this.setState(this.state);

    } else {
      this.state.hinh = parseInt(this.state.hinh) - 1;
      this.setState(this.state);
    }});
},
  render(){
    return (

      <div className="div-album">
        <img src={"image/"+this.state.hinh +".jpg"} />
        <button onClick={this.GiamXuongMot}>Quay lai</button>
        <button onClick={this.TangLenMot}>Tiep theo</button>
      </div>
    );
  }
}
);

ReactDOM.render(
  <div>
<Clickinc soHientai="10" />
<Album />
  </div>
  , document.getElementById('root'));
