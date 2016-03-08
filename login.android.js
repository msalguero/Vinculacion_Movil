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
    var self = this;
    if(!Validations.check_email(this.state.email)){
      console.log("correo invalido, ejemplo@unitec.edu")
      login = false
    }
    if(login){
      var user = {
        User: this.state.email,
        Password: this.state.password
      }
      api.login.login(user, function(res){
        if(res){
          api.setToken(res);
          self.props.navigator.push({
            name: 'home'
          })
        }
      });
    }
  }
	render()
	{
		return (
      <View style={styles.app}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Login</Text>
          <View style={styles.renderRowGeneral}>
            <Text style={styles.textLabel}>Email</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={(email) => this.setState({email})} 
            value={this.state.email}
            />
          </View>
          <View style={styles.renderRowGeneral}>
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={(password) => this.setState({password})} 
            value={this.state.password}
            password={true}/>
          </View>
        </View>
        <View style={styles.renderRowGeneral}>
          <TouchableHighlight 
          style={styles.button} 
          underlayColor={'#00008b'}
          onPress={this._onLoginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight 
          style = {styles.buttonReg} 
          underlayColor={'#00008b'} 
          onPress={this._onRegisterButton}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableHighlight>
        </View>
      </View>
		);
	}
}
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@unitec\.edu/;
    return re.test(email);
}
const styles = StyleSheet.create({
  app:{
    flex:1
  },
  container:{
    flex:1
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0000ff'
  },
  renderRowGeneral:{
    flexDirection:'row',
    flex:1,
    margin:1
  },
  button: {
    flex:.2,
    margin:1,
    height: 20,
    backgroundColor: 'blue',
    justifyContent:'center',
    borderRadius:20
  },
  buttonReg: {
    flex:.3,
    margin:1,
    height:20,
    backgroundColor:'red',
    justifyContent:'center',
    borderRadius:20
  },
  buttonText: {
    fontSize: 18,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textLabel:{
    flex:.3,
    height:40,
    margin:1,
    fontSize:20,
    textAlign:'left',
    justifyContent:'center'
  },
  textInput:{
    margin:1,
    height:40,
    flex:.7
  }
});

module.exports = Login;
