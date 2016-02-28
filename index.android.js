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
  TextInput
} = React;

var List = [{id:1,name:"Pera"},
            {id:2,name:"Manzanaz"},
            {id:3,name:"Aguacate"},
            {id:4,name:"Fresa"},
            {id:5,name:"Papa"},
          {id:6,name:"Litos"}]

var ApiService = require('./ApiService');


class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource:  ds.cloneWithRows(List), _currentAction:"list"};
    this.setDataSource = this.setDataSource.bind(this)
    var api = new ApiService()
    api.majors.get(this.setDataSource)
  }

  setDataSource(Students){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({dataSource: ds.cloneWithRows(Students),  _currentAction: "list"});
  }

render()
  {

      return (
            <View>
                <ListView
                style={styles.welcome}
                dataSource={this.state.dataSource}
                renderRow={
                (rowData) =>
                <View>
                      <Text style={styles.listItem}>{rowData.Name}</Text>
                </View>
                          }/>
            </View>
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
