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
    this.state = {dataSource:  ds.cloneWithRows(List), _currentAction:"list"};
    this.edit = this.edit.bind(this)
    this.list = this.list.bind(this)
  }
  edit(Data){
      this.setState({_currentAction:"edit",  rowData: Data});
  }

  list(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({_currentAction:"list", dataSource:  ds.cloneWithRows(List)});
  }

render()
  {
      if(this.state._currentAction == "list")
      {
          return (
                <ListView
                style={styles.welcome}
                dataSource={this.state.dataSource}
                renderRow={
                (rowData) =>
                <TouchableHighlight onPress={() => this.edit(rowData)}>
                      <Text style={styles.listItem}>{rowData.name}</Text>
                </TouchableHighlight>
                          }/>
                );
     }else if(this.state._currentAction == "edit")
     {
         return (
               <TouchableHighlight onPress={this.list}>
                     <Text style={styles.listItem}>{this.state.rowData.name}</Text>
               </TouchableHighlight>
               );
    }

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
