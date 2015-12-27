```
   ________  _______  ___________ ____
  / ___/ _ \/ ___/ / / / ___/ __ `/ _ \
 / /  /  __(__  ) /_/ / /  / /_/ /  __/
/_/   \___/____/\__,_/_/   \__, /\___/
                          /____/
```

Make and share a small React project with minimal effort. In response to
[@vjeux's fun challenge](https://twitter.com/Vjeux/status/680769537550102530).

1. `npm i resurge -g`
2. `mkdir your-project && cd your-project`
3. `touch index.js`, [add a React component](#sample-starter-app) and export it
4. Run `resurge`

### My project name is taken

Rename the directory and try again? :p

### Commands

- `resurge` will build and publish your app
- `resurge --watch` will watch your directory for changes and publish
  them to surge automatically
- `resurge --list` will show you apps you have deployed to surge.sh

### Can I use xyz?

- Install any npm package you want. Your project will have react/react-dom by default.
- This uses Babel/Browserfiy, with [stage-3](https://babeljs.io/docs/plugins/preset-stage-3/) and [react](http://babeljs.io/docs/plugins/preset-react/) plugins.

### Sample starter app

```javascript
'use strict';
var React = require('react');

class App extends React.Component {
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

module.exports = App;
```

### Contribute

- Feel free to contribute in any way you want as long as it doesn't make
  this project any more difficult to get into. Creating a new project
and publishing it should never take more than the 4 simple steps
described above.
- You could make the CLI better, like this:
  https://github.com/sintaxi/harp/blob/ko-with-surge/bin/harp
