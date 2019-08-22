
### Welcome to Tomb Raider

For this demo, I created a “round-up” feature for the purpose of "bank customers" using a public developer API.

It takes all the transactions in a given week and round them up to the nearest pound. My chosen framework for this was Vue.JS.

<img width="1439" alt="Screenshot 2019-08-22 at 16 50 33" src="https://user-images.githubusercontent.com/24893988/63530507-82ff0880-c4fe-11e9-81d4-aeb816a82cc9.png">

<img width="1440" alt="Screenshot 2019-08-22 at 16 50 47" src="https://user-images.githubusercontent.com/24893988/63530508-83979f00-c4fe-11e9-8829-9fb8432b3619.png">


Firstly, incase anyone is a bit confused why I've referenced Indiana Jones, I remember seeing a bank that had "vaults" as their saving goals and so I thought it'd be funny to reference Tombs.. I also did Roman Archaeology as a degree, so it was any excuse to remind everyone how much I love Indiana Jones, basically.

A quick note about user data/tokens - I have hard-coded the users access token in store/api.js and the users account ID in balanceBlock.vue, both of these need to be updated to valid values before running.

Secondly, I had CORS issues when using Chrome so to get around this, I disabled CORS checks in Chome and on safari e.g. `open -a Google\ Chrome --args --disable-web-security --user-data-dir`.

*For access to a developer API, you need to sign up first. I used (https://developer.starlingbank.com/signup).

## Project setup

```
cd Savings-Tomb
```
```
npm install
```

### Run Build
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### To do/Improvements:

* Instead of hardcoding the developer token, I would probably look into adding it to a env.variable and so as not to expose it on the front end. 

* I woudld also look to make the most of state management like using Vuex as I think to build on this, I could definitely store the transactions in a state and make it more accessible. 



