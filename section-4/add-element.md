# Adding a React element
- add the import syntax
```js
import React from 'react';
import ReactDOM from 'react-dom';
    const element = React.createElement('h1', null, 'Hello World!');

    ReactDOM.render(element, document.getElementById('root'));
```
# Parameters of the createElement
h1 - is the title
null - props
content - display message

- how to render to the page (DOM)
