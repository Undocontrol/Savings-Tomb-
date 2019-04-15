# tomb-raider

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Welcome to Tomb Raider

Firstly, incase anyone is a bit confused why I've referenced Indiana Jones, I did Roman Archaeology as a degree, so this was super fun for me..

Secondly, I had CORS issues when using Chrome so to get around this, I disabled CORS checks in Chome and on safari e.g. `open -a Google\ Chrome --args --disable-web-security --user-data-dir`.

A quick note about user data/tokens - I have hard-coded the users access token in store/api.js and the users account ID in balanceBlock.vue, both of these need to be updated to valid values before running.

