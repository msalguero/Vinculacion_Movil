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

class Home extends Component{

	render()
	{
		return (
      <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
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

module.exports = Home;
