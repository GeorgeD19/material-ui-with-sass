var React = require("react");
var Paper = require("./paper");
var _ = require("underscore");
var FlatButton = require("./flat-button");

var Card = React.createClass({
  propTypes: {
    media: React.PropTypes.node,
    width: React.PropTypes.number,
    title: React.PropTypes.string,
    caption: React.PropTypes.string,
    actions: React.PropTypes.array,
    containerClassName: React.PropTypes.string,
    className: React.PropTypes.string,
  },

  render: function() {
    var { className, containerClassName, actions, style } = this.props;

    className = (className || "") + " mui-card";
    containerClassName = (containerClassName || "") + " mui-card-container";
    actions = _.map(actions, function(actionProps, i) {
      var { className, ...other } = actionProps;
      className =  (className || "") + " mui-card-action";
      return <FlatButton key={i} className={className} {...other} />;
    });
    if (this.props.width != null) style = _.extend((style || {}), {width: this.props.width});

    return (
      <Paper zDepth={1} style={style} className={containerClassName} innerClassName={className}>
        <div className="mui-card-media">
          {this.props.media}
        </div>
        <div className="mui-card-text-container">
          <div className="mui-card-title">{this.props.title}</div>
          <div className="mui-card-caption">{this.props.caption}</div>
        </div>
        {this.props.children}
        <div className="mui-card-actions-container">
          {actions}
        </div>
      </Paper>
    );
  }
});

module.exports = Card;
