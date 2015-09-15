var React = require('react');
var mui = require('mui');
var Dialog = mui.Dialog;
var FlatButton = mui.FlatButton;
var RaisedButton = mui.RaisedButton;
var Toggle = mui.Toggle;
var ComponentDoc = require('../../component-doc.jsx');

var DialogPage = React.createClass({

  getInitialState: function() {
    return {
      modal: false
    };
  },

  render: function() {

    var code =
      '//Full width and height\n' +
      '<Dialog\n' +
      '  title="Dialog With Full Width/Height"\n' +
      '  fullHeight={true}\n' +
      '  fullWidth={true}>\n' +
      '    {someSuperLongContent} \n' +
      '</Dialog>\n\n\n' +
      '//Standard Actions\n' +
      'var standardActions = [\n' +
      '  { text: \'Cancel\' },\n' +
      '  { text: \'Submit\', onClick: this._onDialogSubmit, ref: \'submit\' }\n' +
      '];\n\n' +
      '<Dialog\n' +
      '  title="Dialog With Standard Actions"\n' +
      '  actions={standardActions}\n' +
      '  actionFocus="submit"\n' +
      '  modal={this.state.modal}>\n' +
      '    The actions in this window are created from the json that\'s passed in. \n' +
      '</Dialog>\n\n' +
      '//Custom Actions\n' +
      'var customActions = [\n' +
      '  <FlatButton\n' +
      '    label="Cancel"\n' +
      '    secondary={true}\n' +
      '    onClick={this._handleCustomDialogCancel} />,\n' +
      '  <FlatButton\n' +
      '    label="Submit"\n' +
      '    primary={true}\n' +
      '    onClick={this._handleCustomDialogSubmit} />\n' +
      '];\n\n' +
      '<Dialog\n' +
      '  title="Dialog With Custom Actions"\n' +
      '  actions={customActions}\n' +
      '  modal={this.state.modal}\n' +
      '  dismissOnClickAway={this.state.dismissOnClickAway}>\n' +
      '    The actions in this window were passed in as an array of react objects.\n' +
      '</Dialog>\n';

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'fullWidth',
            type: 'bool',
            header: 'optional (default: false)',
            desc: 'Uses the full width of the page for the content (less $desktop-keyline-increment for margin).'
          },
          {
            name: 'fullHeight',
            type: 'bool',
            header: 'optional (default: false)',
            desc: 'Uses the full height of the page for the content (less $desktop-keyline-increment for margin).'
          },
          {
            name: 'actions',
            type: 'array',
            header: 'optional',
            desc: 'This prop can be either a JSON object containing the actions to render, or an array of react objects.'
          },
          {
            name: 'actionFocus',
            type: 'string',
            header: 'optional',
            desc: 'The ref of the action to focus on when the dialog is displayed.'
          },
          {
            name: 'contentClassName',
            type: 'string',
            header: 'optional',
            desc: 'The className to add to the dialog window content container.'
          },
          {
            name: 'openImmediately',
            type: 'bool',
            header: 'optional (default: false)',
            desc: 'Set to true to have the dialog automatically open on mount.'
          },
          {
            name: 'title',
            type: 'node',
            header: 'optional',
            desc: 'The title to display on the dialog. Could be number, string, element or an array containing these types.'
          },
          {
            name: 'modal',
            type: 'bool',
            header: 'optional (default: false)',
            desc: 'Determine if a dialog should display as a modal dialog - ' +
                  'What this really means is if clicking outside will dismiss the dialog or not (false means it will, true means it won\'t, ' +
                  'yes, I know, it\'s a bad name for this prop).'
          }
        ]
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'dismiss',
            header: 'Dialog.dismiss()',
            desc: 'Hides the dialog.'
          },
          {
            name: 'show',
            header: 'Dialog.show()',
            desc: 'Shows the dialog.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onDismiss',
            header: 'function()',
            desc: 'Fired when the dialog is dismissed.'
          },
          {
            name: 'onShow',
            header: 'function()',
            desc: 'Fired when the dialog is shown.'
          }
        ]
      }
    ];

    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
    ];

    var customActions = [
      <FlatButton
        key={1}
        label="Cancel"
        secondary={true}
        onClick={this._handleCustomDialogCancel} />,
      <FlatButton
        key={2}
        label="Submit"
        primary={true}
        onClick={this._handleCustomDialogSubmit} />
    ];

    return (
      <ComponentDoc
        name="Dialog"
        code={code}
        componentInfo={componentInfo}>

        <RaisedButton label="Full Width/Height" onClick={this.handleFullDialogClick} />
        <br/><br/>
        <RaisedButton label="Standard Actions" onClick={this.handleStandardDialogClick} />
        <br/><br/>
        <RaisedButton label="Custom Actions" onClick={this.handleCustomDialogClick} />

        <Dialog ref="fullDialog" title="Dialog With Full Width/Height" fullWidth={true} fullHeight={true}>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
          Some <br/>
          Super <br/>
          Long <br/>
          Content <br/>
          <br/><br/>
        </Dialog>

        <Dialog
          ref="standardDialog"
          title="Dialog With Standard Actions"
          actions={standardActions}
          actionFocus="submit"
          modal={this.state.modal}>
          The actions in this window are created from the json that's passed in.
        </Dialog>

        <Dialog
          ref="customDialog"
          title="Dialog With Custom Actions"
          actions={customActions}
          modal={this.state.modal}>
          The actions in this window were passed in as an array of react objects.
        </Dialog>
        
        <div style={{width: '300px', margin: '0 auto', paddingTop: '20px'}}>
          <Toggle 
            label="Is Modal"
            onToggle={this._handleToggleChange}
            defaultToggled={this.state.modal}/>
        </div>

      </ComponentDoc>
    );

  },

  _handleCustomDialogCancel: function() {
    this.refs.customDialog.dismiss();
  },

  _handleCustomDialogSubmit: function() {
    this.refs.customDialog.dismiss();
  },
  
  _handleToggleChange: function(e, toggled) {
    this.setState({modal: toggled});
  },

  handleCustomDialogClick: function() {
    this.refs.customDialog.show();
  },

  handleStandardDialogClick: function() {
    this.refs.standardDialog.show();
  },

  handleFullDialogClick: function() {
    this.refs.fullDialog.show();
  }

});

module.exports = DialogPage;
