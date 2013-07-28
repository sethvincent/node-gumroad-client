var Gumroad = require('./index');

var email = process.env.GUMROAD_EMAIL;
var password = process.env.GUMROAD_PASSWORD;

var pizzaID = 'ppXF';

var gumroad = new Gumroad(email, password, createSession);

function createSession(){
  console.log('connected with token ' + gumroad.token);

  gumroad.products.list(getProducts);

  var pizzaOptions = { name: 'pizza is awesome', webhook: true, url: 'http://new.seattle.io/gumroad' };

  gumroad.products.update(pizzaID, pizzaOptions, pizzaProduct)
}

function getProducts(error, response){
  response.links.forEach(function(product){
    console.log('product: ' + product.name)
  })
}

function pizzaProduct(error, response){
  gumroad.products.retrieve(pizzaID, function(error, response){
    console.log(response)
  })
}