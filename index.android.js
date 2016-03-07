/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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
  TextInput,
  Navigator
} = React;

var ApiService = require('./ApiService');
var Login = require('./login.android');
var Home = require('./home');
var RegisterStudent = require('./registerstudent.android');
var StudentApproveSelect = require('./studentapproveselect.android.js');
var StudentApproveForm = require('./studentapproveform.android.js');
var RegisterHours = require('./registerhours.android.js');
var _navigator;

var RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;

  if (route.name === 'login') {
    return (
      <Login
      navigator={navigationOperations}/>
    );
  }
  else if (route.name === 'home') {
    return (
      <Home
      navigator={navigationOperations}/>
    );
  } else if (route.name === 'registerStudent') {
    return (
      <RegisterStudent
      navigator={navigationOperations}/>
    );
  }
  else if (route.name === 'selectApprove') {
    return (
      <StudentApproveSelect
      navigator={navigationOperations}/>
    );
  }
  else if(route.name === 'formApprove'){
    return(
        <StudentApproveForm
        navigator={navigationOperations}
        student={route.student}/>
      );
  }
  else if(route.name === 'registerHours'){
    return(
        <RegisterHours
        navigator={navigationOperations}/>
      );
  }
};

class AwesomeProject extends Component {
  constructor(props) {
    super(props)

  }

  render()
    {
      return (
        <Navigator
          style={styles.navigatorContainer}
          initialRoute={{name:'home'}}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={RouteMapper}/>
      );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
