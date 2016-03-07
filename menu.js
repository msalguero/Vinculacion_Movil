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

class Menu extends Component{

  constructor(props) {
    super(props)
    this.ApproveOption = this.ApproveOption.bind(this)
    this.RegisterHourOption = this.RegisterHourOption.bind(this)
    this.LogoutOption = this.LogoutOption.bind(this)
  }

  ApproveOption(){
    console.log(this.props)
    this.props.navigator.push({
      name: 'selectApprove'
    })
  }

  RegisterHourOption(){
    this.props.navigator.push({
      name: 'registerHours'
    })
  }

  LogoutOption(){
    this.props.navigator.push({
      name: 'login'
    })
  }

	render()
	{
		return (
      <View>
        <View style={styles.background}>
          <Text style={styles.username}>Andrea Vinculacion</Text>
        </View>
        <TouchableHighlight style={styles.button} underlayColor={'#00008b'}
          onPress={this.ApproveOption}
        >
          <Text style={styles.option}>Aprobar Alumnos</Text>
          </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor={'#00008b'}
          onPress={this.RegisterHourOption}
        >
          <Text style={styles.option}>Registrar Horas</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor={'#00008b'}
          onPress={this.LogoutOption}
        >
          <Text style={styles.option}>Logout</Text>
        </TouchableHighlight>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#CD3043',
    height: 50
  },
  username: {
    color: '#FFFFFF',
    marginLeft: 20,
    marginTop: 10
  },
  option: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40
  }
});

module.exports = Menu;
