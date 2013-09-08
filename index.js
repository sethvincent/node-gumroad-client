var request = require('request');

module.exports = Gumroad;

function Gumroad(){
  this.url = "https://api.gumroad.com/v2/";
  this.products = new Products(this);
}

Gumroad.prototype.authorize = function(options, callback){
  var self = this;
  var form = {
    client_id: options.client_id,
    redirect_uri: options.redirect_uri,
    scope: options.scope
  };

  request.get('https://gumroad.com/oauth/authorize', { form: form },
    function(error, response, body){
      //var res = JSON.parse(body);
      callback(error, response, body)
    }
  );
};





/*
*
* PRODUCTS
*
*/

function Products(client){
  this.client = client;
}

Products.prototype.create = function(options, callback){
  this.client.post('products', options, callback)
}

Products.prototype.retrieve = function(id, callback){
  this.client.get('products/' + id, callback);
}

Products.prototype.list = function(callback){
  this.client.get('products', callback);
}

Products.prototype.update = function(id, options, callback){
  this.client.put('products/' + id, options, callback);
}

Products.prototype.destroy = function(id, callback){
  this.client.destroy('products/' + id, callback);
}

Products.prototype.enable = function(id, callback){
  this.client.put('products/' + id + '/enable', callback);
}

Products.prototype.disable = function(id, callback){
  this.client.put('products/' + id + '/disable', callback);
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

