'use strict';

var showText = true;
var toggle = function toggle() {
  showText ? showText = false : showText = true;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visbility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      'Show details'
    ),
    showText && React.createElement(
      'p',
      null,
      '\'Some text\''
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
