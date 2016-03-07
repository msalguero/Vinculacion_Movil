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
<<<<<<< HEAD
var Register = require('./register.android');
var Home = require('./home');
=======
var RegisterStudent = require('./registerstudent.android');
>>>>>>> 593c3cc18e8e6225050079bbc65aff1359d23904
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

          initialRoute={{name:'login'}}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={RouteMapper}/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 2
  },
  listItem: {
    textAlign: 'center',
    fontSize:20,
    color: '#333333',
    borderColor: '#AAAAAA',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight:20,
    backgroundColor: '#AAAAAA',
  },
  listItemAdd: {
    textAlign: 'center',
    fontSize:20,
    color: '#333333',
    borderColor: '#AAAAAA',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight:20,
    backgroundColor: '#AAEEAA',
  },
  listItemDelete: {
    textAlign: 'center',
    fontSize:20,
    color: '#333333',
    borderColor: '#AAAAAA',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight:20,
    backgroundColor: '#EEAAAA',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
