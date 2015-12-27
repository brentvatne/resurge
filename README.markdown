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
2. Go to [surge.sh](https://surge.sh/) and register an account (this is
   the place where we will put our apps)
3. `mkdir your-project-name-here && cd your-project-name-here`
4. `touch index.js`, [add a React component](#sample-starter-app) and export it
5. Run `resurge`

### My project name is taken

Rename the directory and try again? :p

### Other commands

- `resurge --list` will show you apps you have deployed to surge.sh
- `resurge --watch` will watch your directory for changes and publish
  them to surge automatically

### Sample starter app

```javascript
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
