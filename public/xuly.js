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
ReactDOM.render(
  <div>
<Clickinc soHientai="10" />
  </div>
  , document.getElementById('root'));
