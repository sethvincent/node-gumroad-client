var Gumroad = require('./index');

var auth_options = {
  client_id: process.env.GUMROAD_CLIENT_ID,
  redirect_uri: 'http://example.com/callback',
  scope: 'edit_products'
}

var gumroad = new Gumroad();

gumroad.authorize(auth_options, function(err, res){
  console.log(err, res);
});