'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  ScrollView,
} from 'react-native';


var ApiService = require('./ApiService');
var api = new ApiService();
var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

class RegisterHours extends Component 
{
    constructor(props){
      super(props);

      var self = this;
      this.state={dataSource:ds.cloneWithRows([])};
    };

    render() {
      return (
        <View style={styles.app}>
          <Text>{"Hi"}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  app:{
    flex:1
  },
  renderRowGeneral:{
    flexDirection:'row',
    flex:1,
    overflow:'visible'
  },
  viewTitleContainer: {
    margin: 1,
    flex:.1,
    backgroundColor:'#F5D3D3',
    alignSelf:'stretch'
  },
  viewTitle:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  viewFooterContainer: {
    margin: 1,
    flex:.1,
    backgroundColor:'#F5D3D3',
    height:40,
    alignSelf:'stretch'
  },
  viewFooter:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  viewIconHolder:{
    backgroundColor:'green',
    flexDirection:'row',
    borderWidth:2,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    marginTop:12,
    marginBottom:12,
    height:64,
    width:20
  },
  viewItemContainer:{
    backgroundColor:'#FFDADA',
    alignSelf:'stretch',
    margin:10,
    flexDirection:'column',
    flex:1,
    overflow:'visible'
  },
  viewItemSubcontainer:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  viewItemLabel:{
    textAlign:'left',
    fontSize:12,
    fontWeight:'bold'
  },
  viewItemText:{
    textAlign:'right',
    fontSize:12
  },
  touchHighlight:{
    tintColor:'#FEFEFE',
  }
});


module.exports = RegisterHours;