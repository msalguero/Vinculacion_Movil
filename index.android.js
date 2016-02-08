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
  TouchableHighlight
} = React;

var List = [{id:0,name:"Pera"},{id:0,name:"Manzana"},{id:0,name:"Aguacate"},{id:0,name:"Fresa"},{id:0,name:"Papa"},]


class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource:  ds.cloneWithRows(List)};
  }

edit(){
  console.log("WHAT");
}

render() {
    return (
      <ListView
        style={styles.welcome}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <TouchableHighlight onPress={this.edit}>
            <Text style={styles.listItem}>{rowData.name}</Text>
          </TouchableHighlight>}

      />
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
    marginBottom: 5,
    backgroundColor: '#AAAAAA',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
