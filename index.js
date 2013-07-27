var request = require('request');
var util = require('util');

module.exports = Gumroad;
util.inherits(Gumroad, EventEmitter);

function Gumroad(email, password, callback){
  this.url = "https://api.gumroad.com/v1";
  this.session = new Session(this);
  this.products = new Products(this);
  var self = this;

  this.session.create(email, password, function(error, response){
    if (error){ throw new Error; }
    self.token = response.token;
    callback();
  });
}



/*
*
* SESSIONS
*
*/

function Session(client){ 
  this.client = client;
}

Session.prototype.create = function(email, password, callback){
  var options = { email: email, password: password };

  this.client.post('/sessions', options, callback);
}

Session.prototype.destroy = function(callback){
  this.client.destroy('/sessions', callback);
}



/*
*
* PRODUCTS
*
*/

function Products(client){
  this.client = client;
}

Products.prototype.create = function(options, callback){
  this.client.post('/products', options, callback)
}

Products.prototype.retrieve = function(id, callback){
  this.client.get('/products/' + id, callback);
}

Products.prototype.list = function(callback){
  this.client.get('/products', callback);
}

Products.prototype.update = function(id, options, callback){
  this.client.put('/products/' + id, options, callback);
}

Products.prototype.destroy = function(id, callback){
  this.client.destroy('/products/' + id, callback);
}

Products.prototype.enable = function(id, callback){
  this.client.put('/products/' + id + '/enable', callback);
}

Products.prototype.disable = function(id, callback){
  this.client.put('/products/' + id + '/disable', callback);
}



/*
*
* HELPER METHODS
*
*/

Gumroad.prototype.get = function(path, callback){
  var options = { token: this.token }

  request.get(this.url + path, { form: options },
    function(error, response, body){
      var res = JSON.parse(body);
      callback(error, res)
    }
  );
}

Gumroad.prototype.post = function(path, options, callback){
  if (this.token){ options.token = this.token; }

  request.post(this.url + path, { form: options },
    function(error, response, body){
      var res = JSON.parse(body);
      callback(error, res)
    }
  );
}

Gumroad.prototype.put = function(path, options, callback){
  if (this.token){ options.token = this.token; }

  request.put(this.url + path, { form: options },
    function(error, response, body){
      var res = JSON.parse(body);
      callback(error, res)
    }
  );
}

Gumroad.prototype.destroy = function(path, callback){
  var options = { token: this.token }

  request.del(this.url + path, { form: options },
    function(error, response, body){
      var res = JSON.parse(body)
      callback(error, res);
    }
  );
}

