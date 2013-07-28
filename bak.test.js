var Gumroad = require('./index');
var nock = require('nock');
var test = require('tap').test;

var email = 'email@example.com';
var password = 'examplepassword';

nock('https://api.gumroad.com/v1')
  .post('/v1/sessions', "email=email%40example.com&password=examplepassword")
  .reply(200, "{\"success\":true,\"token\":\"5b6fb65ed5f534c370d782a44fb31615\"}");

test('creating a session', function(t){
  t.plan(2);

  var gumroad = new Gumroad(email, password, function(){
    t.ok(gumroad.url, 'url of api exists');
    t.ok(gumroad.token, 'token exists');
  });

});