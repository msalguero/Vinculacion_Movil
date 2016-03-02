
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
var api = new ApiService();

class StudentApproveForm extends Component {
  constructor(props) {
    super(props);
    this.state={student:this.props.student}
  }

  renderStudentInfo()
  {
    return(
            <View style={styles.renderRowGeneral}>
                  <View style={styles.viewItemContainer}>
                    <View style={styles.viewItemSubcontainer}>
                          <Text style={styles.viewItemLabel}>
                            {"Name:"}
                          </Text>
                          <Text style={styles.viewItemText}>
                            {this.state.student.Name}
                          </Text>
                    </View>
                    <View style={styles.viewItemSubcontainer}>
                          <Text style={styles.viewItemLabel}>
                            {"Numero de Cuemta:"}
                          </Text>
                          <Text style={styles.viewItemText}>
                            {this.state.student.AccountId}
                          </Text>
                    </View>
                    <View style={styles.viewItemSubcontainer}>
                          <Text style={styles.viewItemLabel}>
                            {"Campus:"}
                          </Text>
                          <Text style={styles.viewItemText}>
                            {this.state.student.Campus}
                          </Text>
                    </View>
                    <View>
                    {
                        (function(data)
                        {
                            if (data.Major)
                            {
                                return (
                                        <View style={styles.viewItemSubcontainer}>
                                            <Text style={styles.viewItemLabel}>
                                                {"Carrera:"}
                                            </Text>
                                            <Text style={styles.viewItemText}>
                                                {data.Major.Name}
                                            </Text>
                                        </View>
                                    );
                            }
                        })(this.state.student)
                    }
                    </View>
                </View>
            </View>
    )
  };



  renderFooter(){
    return(
        <View style={styles.renderRowGeneral}>
            <TouchableHighlight 
            style={styles.viewFooterAcceptButton} 
            onPress={() => api.students.approve(
                    this.state.student.AccountId,function(res){
                        console.log("HI")
                    }
                )}>
              <Text style={styles.viewFooter}>
                    {"Aprobar"}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight 
            style={styles.viewFooterRejectButton} 
            onPress={() => api.students.reject(
                    {
                      "AccountId": this.state.student.AccountId,
                      "Message": "Este API no funciona."
                    },
                    function(res){
                        console.log("HI")
                    }
                )}>
              <Text style={styles.viewFooter}>
                    {"Reprobar"}
              </Text>
            </TouchableHighlight>
        </View>
    )
  }

  render()
    {
      return (
        <View style={styles.app}>
         {this.renderStudentInfo()}  
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
  viewFooterAcceptButton: {
    margin: 1,
    flex:.1,
    backgroundColor:'#A3FFA3',
    height:40,
    alignSelf:'stretch'
  },
   viewFooterRejectButton: {
    margin: 1,
    flex:.1,
    backgroundColor:'#FFA3A3',
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



module.exports = StudentApproveForm;