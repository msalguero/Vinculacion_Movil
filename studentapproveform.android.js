
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


class StudentApproveForm extends Component {
  constructor(props) {
    super(props)
  }

  render()
    {
      return (
         <View>
            <Text>"HI"</Text>
         </View>
      );  
  }
}

const styles = StyleSheet.create(
  {

  }
);

module.exports = StudentApproveForm;