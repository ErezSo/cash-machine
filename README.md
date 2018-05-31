# Cash Machine

The cash machine service returns the requested withdraw value as an array of the least amount of notes.

The GET endpoint `/withdraw/:drawValue` expects to recieve a query parameter of the requested value as a number to withdraw from the account.



### Installation

The service requires [Node.js](https://nodejs.org/) v6.4+ to run.

```sh
$ npm install
```

### Run the service

```sh
$ npm start
```

### Run the service locally in dev mode

```sh
$ npm run dev
```

### Run unit tests

```sh
$ npm test
```