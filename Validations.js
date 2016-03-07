var Validations = {

  check_email: function(email){
    var regex = /^[a-zA-Z0-9._-]+@unitec\.edu/;
    return regex.test(email);
  },

  check_account: function(account){
    var regex = /^\d+$/;
    return regex.test(account);
  },

  check_string: function(word){
    var regex = /^[a-zA-Z]+$/;
    return regex.test(word);
  },

  check_password: function(pass){//should contain at least one(digit,lower,upper), 8 char min
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(pass);
  }
}
module.exports = Validations;
