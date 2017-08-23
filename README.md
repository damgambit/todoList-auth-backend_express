# auth-backend_express

## Simple boilerplate to deploy a TodoList app with a NodeJS backend with authentication


## Set Up
```
npm install

PORT=[port] HOST=[host] NODE_ENV="production" MONGO_DB="mongodb://[urlstring]" node index.js
```


## Config
Change the config.js file to change the secret key

Change the following line of code in index.js to configure your mongodb connection
```
mongoose.connect('mongodb://localhost:introToAuth/introToAuth');
```


