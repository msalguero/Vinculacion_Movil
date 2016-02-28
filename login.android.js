'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight,
  TextInput
} = React;

class Login extends Component{
	contructor(props){
		super(props)
    this._onLoginButton = this._onLoginButton.bind(this)
	}
  _onLoginButton(username, password){

  }
	render()
	{
		return (
      <View>
        <Text>Login</Text>
        <Text>Username</Text>
        <TextInput
           onChangeText={(text) => this.setState({text})}
           value={this.state.text} />

      <Text>Password</Text>
        <TextInput
           password={true}
           />

      <TouchableHighlight>
        <Text>Login</Text>
      </TouchableHighlight>
      </View>
			);

	}
}
