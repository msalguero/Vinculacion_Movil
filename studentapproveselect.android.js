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

var Labels = {
  viewTitle:"Aprobacion de Alumnos"
}

var List = [
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'alefrech@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Alejandro Frech',
    Password:'123456789',
    Status:'Pending'
  },
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  },  
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  },  
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  },  
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  },  
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  },
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  },
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  },
  {
    Campus:'SPS',
    CreationDate:'2016-02-28T12:24:36',
    Email:'sambagong@unitec.edu',
    Id:9,IdNumber:'21151029',
    Major:{
      Id:30,
      MajorId:'I - 01',
      Name:'INGENIERÍA EN SISTEMAS COMPUTACIONALES'
    },
    ModificationDate:'2016-02-28T12:36:00',
    Name:'Fabian',
    Password:'123456789',
    Status:'Pending'
  }
];


class StudentsApproveSelect extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
    this.state={
      dataSource: ds.cloneWithRows(List),
      loaded:false
    }
  };

  toValidate(rowData){
      this.setState({studentToApprove:rowData});
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
    <View style={styles.viewFooterContainer}>
      <Text style={styles.viewFooter}>
            {"Footer"}
      </Text>
    </View>
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