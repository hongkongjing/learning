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
  changeImg(){
    this.setState({hinh: (parseInt(this.state.hinh)%4) +1});
  },
  getInitialState(){
    return{hinh: 1};
  },
  render(){
    return (

      <div className="div-album">
        <img src={"image/"+this.state.hinh +".jpg"} />
      </div>
    );
  },
    componentDidMount(){
        setInterval(this.changeImg,1000);
    }
}
);

ReactDOM.render(
  <div>
<Clickinc soHientai="10" />
<Album />
  </div>
  , document.getElementById('root'));
