import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import htm from 'https://cdn.skypack.dev/htm';
import App from './App.js';

const html = htm.bind(React.createElement);

ReactDOM.render((html`<${App} />`), document.querySelector('#app'));
