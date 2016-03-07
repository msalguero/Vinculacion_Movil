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
  Picker
} from 'react-native';

var ApiService = require('./ApiService');
var Validations = require('./Validations');
var api = new ApiService();
var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});


class RegisterHours extends Component 
{
    constructor(props){
      super(props);
      var self = this;

      this.state={
        selectedMajor:"",
        selectedSection:"",
        selectedProject:"",
        selectedStudent:"",
        hoursToRegister:"0",
        Majors:[],
        Sections:[],
        Projects:[],
        Students:[]
      }
      api.majors.get(this.setMajors);
      api.sections.get(this.setSections);
      api.projects.get(this.setProjects);
      api.students.get(this.setStudents);
    };

    listMajors(item){
      this.state.Majors.map(function(item){return (<Picker.Item style={styles.viewItemText} key={item.MajorId} label={item.Name} value={item.Id} />)})
    };

    setMajors(majors){
      this.setState({Majors:majors});
    };

    listSections(item)
    {
      this.state.Sections.map(function(item){return (<Picker.Item style={styles.viewItemText} key={item.Code} label={item.Code} value={item.Id} />)})
    };

    setSections(sections){
      this.setState({Sections: sections});
    };

    listProjects(item){
      this.state.Projects.map(function(item){return (<Picker.Item style={styles.viewItemText} key={item.Id} label={item.Name} value={item.Id} />)})
    };

    setProjects(projects){
      this.setState({Projects: projects});
    };

    listStudents(item){
      this.state.Students.map(function(item){return(<Picker.Item style={styles.viewItemText} key={item.AccountId} label={item.Name} value={item.Id}/>)})
    };

    setStudents(students){
      this.setState({Students: students});
    };


    renderForm(){

      return(
        <View style={styles.app}>
          <View style={styles.renderRowGeneral}>
              <Text style={styles.viewItemLabel}>{"Major"}</Text>
               <Picker style={styles.picker}
                selectedValue={this.state.selectedMajor}
                onValueChange={(selectedMajor) => this.setState({selectedMajor: selectedMajor})}>
                 {this.listMajors()}
                </Picker>
          </View>
          <View style={styles.renderRowGeneral}>
              <Text style={styles.viewItemLabel}>{"Sections"}</Text>
               <Picker style={styles.picker}
                selectedValue={this.state.selectedSection}
                onValueChange={(selectedSection) => this.setState({selectedSection: selectedSection})}>
                 {this.listSections()}
                </Picker>
          </View>
          <View style={styles.renderRowGeneral}>
              <Text style={styles.viewItemLabel}>{"Projects"}</Text>
               <Picker style={styles.picker}
                selectedValue={this.state.selectedProject}
                onValueChange={(selectedProject) => this.setState({selectedProject: selectedProject})}>
                 {this.listProjects()}
                </Picker>
          </View>
          <View style={styles.renderRowGeneral}>
              <Text style={styles.viewItemLabel}>{"Students"}</Text>
               <Picker style={styles.picker}
                selectedValue={this.state.selectedStudent}
                onValueChange={(selectedStudent) => this.setState({selectedStudent: selectedStudent})}>
                 {this.listStudents()}
                </Picker>
          </View>
          <View style={styles.renderRowGeneral}>
            <TextInput onChangeText={(hoursToRegister) => this.setState({hoursToRegister:hoursToRegister})} value={this.state.hoursToRegister}/>
          </View>
        </View>
        );
    };

    render() {
      return (<View>
        {this.renderForm()}
        </View>
      );
    };
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
  },
  picker: {
    width: 300
  }
});


module.exports = RegisterHours;