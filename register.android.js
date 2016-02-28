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

class Register extends Component{
	contructor(props){
		super(props)
    this._onRegisterButton = this._onRegisterButton.bind(this)
	}
  _onRegisterButton(name, email, password ){

  }
	render()
	{
		return (
      <View>
        <Text>Register</Text>

        <Text>First Name</Text>
        <TextInput
            />

         <Text>Last Name</Text>
         <TextInput
            />

          <Text>Email</Text>
          <TextInput
             />

        <Text>Password</Text>
          <TextInput
             password={true}
             />

      <TouchableHighlight>
        <Text>Register</Text>
      </TouchableHighlight>
      </View>
			);

	}
}
