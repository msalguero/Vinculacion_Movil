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

var Labels = {
  viewTitle:"Aprobacion de Alumnos"
}

class StudentsApproveSelect extends Component {

  constructor(props){
    super(props);

    var self = this;
    this.state={dataSource:ds.cloneWithRows([])};
    this.toValidate = this.toValidate.bind(this);
    this.setDataSource = this.setDataSource.bind(this);
    api.students.getByFilter(0,self.setDataSource);
  };

  setDataSource(list){
    if(list){
      this.setState({
        dataSource: ds.cloneWithRows(list)
      });
    }
  };


  toValidate(rowData){
      this.props.navigator.push({
         name: 'formApprove',
         student: rowData
      });
  
  };

  

  renderRow(rowData){
    return(
      <TouchableHighlight underlayColor='#FEFEFE' onPress={() => this.toValidate(rowData)}>
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
                {rowData.AccountId}
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
             

              <View>{(function(rowData) {
		          if (rowData.Major) {
		            return (<Text style={styles.viewItemText}>{rowData.Major.Name}</Text>); 
		          } 
		        })(rowData)}
              </View>
              
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
    <TouchableHighlight style={styles.viewFooterContainer}>
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


module.exports = StudentsApproveSelect;