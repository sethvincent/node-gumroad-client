var Gumroad = require('./index');

var email = process.env.GUMROAD_EMAIL;
var password = process.env.GUMROAD_PASSWORD;

var gumroad = new Gumroad(email, password, createSession);

function createSession(){
  console.log('connected with token ' + gumroad.token);

  gumroad.products.list(getProducts);
}

function getProducts(error, response){
  response.links.forEach(function(product){
    console.log('product: ' + product.name);
  });
}