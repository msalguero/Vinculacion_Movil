'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  Navigator,
  ListView,
  View,
  TouchableHighlight,
  TextInput
} = React;

var ApiService = require('./ApiService');
var Validations = require('./Validations');
var api = new ApiService();

class Login extends Component{

  constructor(props) {
    super(props)
    this._onLoginButton = this._onLoginButton.bind(this)
    this._onRegisterButton = this._onRegisterButton.bind(this)
    this.state = {email: "", password: ""};
  }
  _onRegisterButton(){
    //console.log(this.props)
    this.props.navigator.push({
      name: 'register'
    })
  }

  _onLoginButton(){
    //regex
    var login = true
    if(!Validations.check_email(this.state.email)){
      console.log("correo invalido, ejemplo@unitec.edu")
      login = false
    }
    if(!Validations.check_password(this.state.password)){
      console.log("contrasena invalida")
      login = false
    }
    if(login){
      var user = {
        User: this.state.email,
        Password: this.state.password
      }
      api.login.login(user, function(res){
        console.log(res);
      });
    }
  }
	render()
	{
		return (
      <View>
        <Text style={styles.titleText}>Login</Text>
        <Text>Email</Text>
        <TextInput
          onChangeText={(email) => this.setState({email})} value={this.state.email}
        />

        <Text>Password</Text>
          <TextInput
            onChangeText={(password) => this.setState({password})} value={this.state.password}
            password={true}
          />

        <TouchableHighlight style={styles.button} underlayColor={'#00008b'}
          onPress={this._onLoginButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        <Text></Text>
        <Text></Text>
        <TouchableHighlight style = {styles.buttonReg} underlayColor={'#00008b'}
          onPress={this._onRegisterButton}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableHighlight>
      </View>
		);
	}
}
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@unitec\.edu/;
    return re.test(email);
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0000ff'
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: 'aqua',
    marginLeft: 100
  },
  buttonReg: {
    width: 100,
    color: 'aqua',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

module.exports = Login;
