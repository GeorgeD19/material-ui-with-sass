var React = require('react');
var mui = require('mui');
var ComponentDoc = require('../../component-doc.jsx');

var CardsPage = React.createClass({

  render: function() {
    var code =
      'var cardActions = [\n' +
      '  {label: "Share",   onClick: function(e) { console.log("Clicked share!"); }},\n' +
      '  {label: "Explore", onClick: function(e) { console.log("Clicked explore!"); }}\n' +
      '];\n' +
      'var cardMedia = <img src="images/kangaroo_valley_card.png" />;\n\n' +

      '<Card title="Kangaroo Valley Safari"\n' +
      '      caption="Located two hours south of Sydney in the Southern Highlands of New South Wales, ..."\n' +
      '      media={cardMedia}\n' +
      '      width={320}\n' +
      '      actions={cardActions} />';

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'title',
            type: 'string',
            header: 'optional',
            desc: 'The card title'
          },
          {
            name: 'caption',
            type: 'string',
            header: 'optional',
            desc: 'The card caption/description that appears underneath the title'
          },
          {
            name: 'media',
            type: 'node',
            header: 'optional',
            desc: 'Some content to render in the media space'
          },
          {
            name: 'actions',
            type: 'array',
            header: 'optional',
            desc: 'Array of objects which are props that will be used to create the action FlatButtons (see the FlatButton page for more details on what these props can be)'
          },
          {
            name: 'containerClassName',
            type: 'string',
            header: 'optional',
            desc: 'The class given to the outermost div that surrounds and contains the entire card'
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'The class given to the inner div that surrounds all the card content'
          },
          {
            name: 'width',
            type: 'number',
            header: 'optional',
            desc: 'Short-hand for setting style.width. You can also set widths in your CSS.'
          }
        ]
      }
    ];

    return (
      <ComponentDoc
        name="Cards"
        code={code}
        componentInfo={componentInfo}>

        <mui.Card title={"Kangaroo Valley Safari"}
              caption={"Located two hours south of Sydney in the Southern Highlands of new South Wales, ..."}
              media={<img src="images/kangaroo_valley_card.png" />}
              width={320}
              actions={[{
                     label: "Share",
                     onClick: function(e) { console.log("Clicked Share!"); }
                   }, {
                     label: "Explore",
                     onClick: function(e) { console.log("Clicked Explore!"); }
                   }
               ]}
          />

      </ComponentDoc>
    );
  }
});

module.exports = CardsPage;
