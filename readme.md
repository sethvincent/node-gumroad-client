# gumroad-client
> a node.js api wrapper for [gumroad.com](http://gumroad.com)

Currently supports the v1 api, revisions to support the v2 oauth api is underway in the api-v2 branch.

## installation:
```
npm install gumroad-client
```

## usage:
```
var Gumroad = require('gumroad-client');

var gumroad = new Gumroad('youremail', 'yourpassword', function(){
  gumroad.products.list(function(error, response){
    // response is an array of all your products
  });
});
```

## Gumroad api documentation
Be sure to read the api docs so you know what options to pass: [https://gumroad.com/api/methods](https://gumroad.com/api/methods)

## methods:

### sessions
gumroad.session.create(email, password, callback)
> create a gumroad session, called automatically when creating a new Gumroad object

gumroad.session.destroy(callback)
> destroy the session when finished

### products
gumroad.products.create(options, callback)
> create a new product

gumroad.products.retrieve(id, callback)
> retrieve a product

gumroad.products.update(id, options, callback)
> update a product

gumroad.products.destroy(id, callback)
> destroy a product

gumroad.products.list(callback)
> list all products

gumroad.products.enable(id, callback)
> enable a product

gumroad.products.disable(id, callback)
> disable a product

## tests
Using nock and tap for testing.

Clone this repository, then run tests:
```
npm test
```

Run the example in example.js:
```
npm example
```

## license:
MIT