
'use strict';

var ApiService = function () {

  var url = 'http://fiasps.unitec.edu:8085/api/';

  this.login = 
  {
    login: function(object,callback){
      fetch(url + 'login', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(object)
		})
		.then((response) => response.json())
	    .then(callback)
	    .done();
    }
  }

  this.students = 
  {
  	get: function(callback){
  		fetch(url + 'students')
	      .then((response) => response.json())
	      .then(callback)
	      .done();
  	},
  	getByFilter: function(id, callback){
  		fetch(url + 'students/filter/' + id)
	      .then((response) => response.json())
	      .then(callback)
	      .done();
  	},
  	getById: function(id, callback){
	  	fetch(url + 'students/' + id)
	    .then((response) => response.json())
	    .then(callback)
	    .done();
  	},
  	create: function(object, callback){
  		fetch(url + 'students', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(object)
		})
		.then((response) => response.json())
	    .then(callback)
	    .done();
  	},
  	update: function(object, callback){
  		fetch(url + 'students/' + object.id, {
		  method: 'PUT',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(object)
		})
		.then((response) => response.json())
	    .then(callback)
	    .done();
  	},
  	approve: function(id,callback){
  		fetch(
  			url + 'students/'+ id +'/Verified',
	  		{
	  			method: 'PUT',
	  			headers:{
	  				'Accept':'application/json',
	  				'Content-Type':'application/json'
	  			}
	  		}
  		)
  		.then((response) => response.json())
  		.then(callback)
  		.done();
  	},
  	reject: function(object,callback){
  		fetch(
  			url + 'students/Rejected',
	  		{
	  			method: 'PUT',
	  			headers:{
	  				'Accept':'application/json',
	  				'Content-Type':'application/json'
	  			},
	  			body:JSON.stringify(object)
	  		}
  		)
  		.then((response) => response.json())
  		.then(callback)
  		.done();
  	}
  }

  this.majors = 
  {
  	get: function(callback){
		fetch(url + 'majors')
		.then((response) => response.json())
		.then(callback)
		.done();
  	},
  	getById: function(id, callback){
  		fetch(url + 'majors/' + id)
	    .then((response) => response.json())
	    .then(callback)
	    .done();
  	},
  	create: function(object, callback){
  		fetch(url + 'majors', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(object)
		})
		.then((response) => response.json())
	    .then(callback)
	    .done();
  	},
  	update: function(object, callback){
  		fetch(url + 'majors/' + object.id, {
		  method: 'PUT',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(object)
		})
		.then((response) => response.json())
	    .then(callback)
	    .done();
  	}
  }

   this.hours = 
   {
  	get: function(callback){
  		fetch(url + 'hours')
		.then((response) => response.json())
		.then(callback)
		.done();
  	},
  	getById: function(id, callback){
		fetch(url + 'hours/' + id)
		.then((response) => response.json())
		.then(callback)
		.done();
  	},
  	create: function(object, callback){
  		fetch(url + 'hours', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(object)
		})
		.then((response) => response.json())
	    .then(callback)
	    .done();
  	},
  	update: function(object, callback){
  		fetch(url + 'hours/' + object.id, {
		  method: 'PUT',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(object)
		})
		.then((response) => response.json())
	    .then(callback)
	    .done();
  	}
  }

   this.projects = 
   {
  	get: function(callback){
  		fetch(url + 'projects')
		.then((response) => response.json())
		.then(callback)
		.done();
  	}
  }

};

module.exports = ApiService;
