# gumroadjs
> a node.js api client for the gumroad api

## installation:
```
npm install gumroadjs
```

## usage:
```
var Gumroad = require('gumroadjs');

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


## license:
MIT