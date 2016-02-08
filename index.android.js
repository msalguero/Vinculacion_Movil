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

var List = [{id:1,name:"Pera"},{id:2,name:"Manzana"},{id:3,name:"Aguacate"},{id:4,name:"Fresa"},{id:5,name:"Papa"},]


class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource:  ds.cloneWithRows(List), _currentAction:"list"};
    this.edit = this.edit.bind(this)
    this.Save = this.Save.bind(this)
    this.delete = this.delete.bind(this)
    this.create = this.create.bind(this)
    this.cancel = this.cancel.bind(this)
    this.add = this.add.bind(this)
  }
  edit(Data){
      this.setState({_currentAction:"edit",  rowData: Data});
  }

  delete(Data){
    for(var i=0; i < List.length;i++)
    {
      if(List[i].id == Data.id)
      {
        List.splice(i,1);
      }
    }
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({_currentAction:"list", dataSource:  ds.cloneWithRows(List)});
  }

  add()
  {
      List.push({id:List.length+1, name:this.state.text});
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({_currentAction:"list", dataSource:  ds.cloneWithRows(List)});
  }

  Save(){
    for(var i=0; i < List.length;i++)
    {
      if(List[i].id == this.state.rowData.id)
      {
        List[i].name = this.state.text;
      }
    }

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({_currentAction:"list", dataSource:  ds.cloneWithRows(List)});
  }

  create(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({_currentAction:"create", text:""});
  }

  cancel(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({_currentAction:"list", dataSource:  ds.cloneWithRows(List)});
  }

render()
  {
      if(this.state._currentAction == "list")
      {
          return (
                <View>
                    <ListView
                    style={styles.welcome}
                    dataSource={this.state.dataSource}
                    renderRow={
                    (rowData) =>
                    <View>
                        <TouchableHighlight onPress={() => this.edit(rowData)}>
                          <Text style={styles.listItem}>{rowData.name}</Text>
                        </TouchableHighlight>
                    </View>
                              }/>
                    <TouchableHighlight onPress={() => this.create()}>
                      <Text style={styles.listItemAdd}>CREATE</Text>
                    </TouchableHighlight>
                </View>
                );
     }else if(this.state._currentAction == "edit")
     {
         return (
               <View>
                   <TextInput
                   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                   onChangeText={(text) => this.setState({text})}
                   defaultValue={this.state.rowData.name}
                   value={this.state.text} />
                   <TouchableHighlight onPress={() => this.Save()}>
                         <Text style={styles.listItem}>SAVE CHANGES</Text>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={() => this.delete(this.state.rowData)}>
                        <Text style={styles.listItemDelete}>DELETE</Text>
                   </TouchableHighlight>
               </View>
               );
    }else if(this.state._currentAction == "create")
    {
        return (
              <View>
                  <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text} />
                  <TouchableHighlight onPress={() => this.add()}>
                        <Text style={styles.listItemAdd}>ADD</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => this.cancel()}>
                       <Text style={styles.listItemDelete}>CANCEL</Text>
                  </TouchableHighlight>
              </View>
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
