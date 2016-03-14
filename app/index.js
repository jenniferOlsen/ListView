var React = require('react');
var ReactDOM = require('react-dom');

var NameList = React.createClass({
  propTypes: {
    names: React.PropTypes.array
  },

  getInitialState: function() {
    return {
      important: true
    }
  },
  onMarkImportant() {
    if (this.state.important === true) {
      this.setState({important: false});
    } else {
      this.setState({important: true});
    }
  },

  render: function() {
    return (
      <div className={this.state.important ? "important" : ''} >
        <ol>
          {this.props.names.map(function(name) {
            return <li>{name}</li>;
          })}
        </ol>
        <button onClick={this.onMarkImportant}>Important</button>
      </div>
    )
  }
});

ReactDOM.render(
  <NameList names = {['John', 'Sarah', 'Arnold']}/>,
  document.getElementById('app')
);