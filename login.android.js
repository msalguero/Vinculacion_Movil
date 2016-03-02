'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  ListView,
  View,
  TouchableHighlight,
  TextInput
} = React;

var ApiService = require('./ApiService');
var api = new ApiService();

class Login extends Component{
  constructor(props) {
    super(props)
    this._onLoginButton = this._onLoginButton.bind(this)
    this._onRegisterButton = this._onRegisterButton.bind(this)
    this.state = {email: "", password: ""};
  }
  _onRegisterButton(){

  }
  _onLoginButton(){
    //regex
    if(this.state.email!="" || this.state.password!= ""){
      var user = {
        User: this.state.email,
        Password: this.state.password
      }
      api.login.login(user, function(res){
        console.log(res);
      });
    }
    else{
      //message error
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
