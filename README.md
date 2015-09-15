# [material-ui-with-sass](http://sarink.github.io/material-ui-with-sass)

material-ui-with-sass is a combination fork of [material-ui](https://github.com/callemall/material-ui)@v0.7.5 and [material-ui-sass](https://github.com/gpbl/material-ui-sass) that still uses traditional css (well, sass) to apply styles.

Currently, it works with react >= 0.13, including 0.14.0-beta1

## Why?
Because of [this decision](https://github.com/callemall/material-ui/issues/30).
I'm in a situation where upgrading to material-ui v0.8 would've been too time-consuming to refactor the entire project in favor of their inline-js styles. And so, material-ui-with-sass was born. It's currently pretty far behind the original material-ui, but if you find this useful, please contribute! This repo could use some love.

## Documentation/Examples
Check out our [github io site](http://sarink.github.io/material-ui-with-sass) for live examples. Although this looks identical to material-ui's demo site, it has been updated to reflect material-ui-with-sass's current state.

## Notable Differences
* Uses [SASS](http://sass-lang.com) instead of inline-styles or Less (obviously)
* [Dialog Component](http://sarink.github.io/material-ui-with-sass/#/components/dialog) has been improved
* New [Accordion Component!](http://sarink.github.io/material-ui-with-sass/#/components/accordion)
* We've added a [SpeedDial](http://www.google.com/design/spec/components/buttons-floating-action-button.html#buttons-floating-action-button-transitions) to our [FloatingActionButton](http://sarink.github.io/material-ui-with-sass/#/components/buttons)
* Material fonts and icons are automatically included (from Google's CDN). Plus, a handy new [Icon Component](http://sarink.github.io/material-ui-with-sass/#/components/icons)
* [Tabs](http://sarink.github.io/material-ui-with-sass/#/components/tabs) are more customizable
* react-tap-event-plugin is no longer a dependency. Due to [this bug](https://github.com/zilverline/react-tap-event-plugin/issues/22) We have removed all references of "TouchTap" and replaced with "Click", for the time being

## Installation
material-ui-with-sass is available as an [npm package](https://www.npmjs.org/package/material-ui-with-sass).
```sh
npm install material-ui-with-sass
```

## Styling
The styles are separated into 2 sass files:
* src/sass/scaffolding.scss
* src/sass/components.scss

*It is important that when you compile the sass that you use something like autoprefixer!*

This allows you to override any variables defined in [_custom-variables.scss](https://github.com/sarink/material-ui-with-sass/blob/master/src/sass/variables/_custom-variables.scss) without having to modify material-ui-with-sass source files directly. For example, your main.scss file could look something like this:
```less
@import "node_modules/material-ui-with-sass/src/sass/scaffolding";

// Define a custom sass file to override any variables defined in scaffolding.scss
@import "my-custom-overrides.scss";

@import "node_modules/material-ui-with-sass/src/sass/components";
```

## Usage
Once material-ui-with-sass is included in your project, you can use the components this way:
```js
/** MyAwesomeReactComponent.jsx */

var React = require("react"),
var mui = require("material-ui-with-sass");

var MyAwesomeReactComponent = React.createClass({
  render: function() {
    return (
      <mui.RaisedButton label="Default" />
    );
  }
});

module.exports = MyAwesomeReactComponent;
```

## Contribute
This project is seriously lagging behind the original material-ui, but I'm hoping there are enough people who want to use material-ui, but either didn't want to, or simply couldn't refactor the entire project to use inline-js styling, that this will gain a little popularity.
Please contribute if you can!

## License
This project is licensed under the terms of the [MIT license](https://github.com/sarink/material-ui-with-sass/blob/master/LICENSE)
