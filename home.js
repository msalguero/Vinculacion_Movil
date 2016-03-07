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


var ScrollableTabView = require('react-native-scrollable-tab-view');
var Menu = require('./menu');
var nav;

class Home extends Component{

  constructor(props){
    super(props);
    nav = props.navigator;
    var self = this;
  };

	render()
	{
		return (
      <ScrollableTabView>
        <View tabLabel="Notificaciones" />
        <Menu navigator={nav} tabLabel="Menu" />
      </ScrollableTabView>
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
    marginLeft: 100
  },
  buttonReg: {
    width: 100
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

module.exports = Home;
