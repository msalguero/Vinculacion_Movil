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

var List = [];

var Labels = {
  viewTitle:"Aprobacion de Alumnos"
}

class StudentsApproveSelect extends Component {

  constructor(props){
    super(props);

    this.toValidate = this.toValidate.bind(this);
    this.setDataSource = this.setDataSource.bind(this);
    
    api.students.getByFilter(0,function(res){
      List = res;
    });
    this.setDataSource();
  };

  setDataSource(){
    console.log(List);
    var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
    this.state={
      dataSource: ds.cloneWithRows(List),
      loaded:false
    }
  };


  toValidate(rowData){
      this.setState({studentToApprove:rowData});
      this.props.navigator.push({
         name: 'formApprove'
      });
  
  };

  renderRow(rowData){
    return(
      <TouchableHighlight underlayColor='#FEFEFE' onPress={this.toValidate(rowData)}>
        <View style={styles.renderRowGeneral}>
          <View style={styles.viewIconHolder}>

          </View>
          <View style={styles.viewItemContainer}>
            <View style={styles.viewItemSubcontainer}>
              <Text style={styles.viewItemLabel}>
                {"Name:"}
              </Text>
              <Text style={styles.viewItemText}>
                {rowData.Name}
              </Text>
            </View>
            <View style={styles.viewItemSubcontainer}>
              <Text style={styles.viewItemLabel}>
                {"Numero de Cuemta:"}
              </Text>
              <Text style={styles.viewItemText}>
                {rowData.IdNumber}
              </Text>
            </View>
            <View style={styles.viewItemSubcontainer}>
              <Text style={styles.viewItemLabel}>
                {"Campus:"}
              </Text>
              <Text style={styles.viewItemText}>
                {rowData.Campus}
              </Text>
            </View>
            <View style={styles.viewItemSubcontainer}>
              <Text style={styles.viewItemLabel}>
                {"Carrera:"}
              </Text>
              <Text style={styles.viewItemText}>
                {rowData.Major.Name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  renderHeader(){
    return(
      <View 
      style={styles.viewTitleContainer}>
        <Text 
        style={styles.viewTitle}>
           {Labels.viewTitle}
        </Text>
      </View>
      )
  };

  renderFooter(){
    return(
    <TouchableHighlight style={styles.viewFooterContainer} onPress={this.setDataSource()}>
      <Text style={styles.viewFooter}>
            {"Footer"}
      </Text>
    </TouchableHighlight>
    )
  };

  render() {
    return (
      <View style={styles.app}>
        {this.renderHeader()}
         <ListView 
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
        />
        {this.renderFooter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app:{
    flex:1,
  },
  renderRowGeneral:{
    flexDirection:'row',
    flex:1,
    overflow:'visible'
  },
  viewTitleContainer: {
    margin: 10,
    flex:.1,
    backgroundColor:'#F50000',
    alignSelf:'stretch'
  },
  viewTitle:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  viewFooterContainer: {
    margin: 10,
    flex:.1,
    backgroundColor:'#F50000',
    height:40,
    alignSelf:'stretch'
  },
  viewFooter:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  viewIconHolder:{
    backgroundColor: 'green',
    flexDirection:'row',
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


module.exports = StudentsApproveSelect;