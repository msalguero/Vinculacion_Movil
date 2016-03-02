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
  Picker
} = React;

var ApiService = require('./ApiService');
var api = new ApiService();

class Register extends Component{
  constructor(props) {
    super(props)
    this._onRegisterButton = this._onRegisterButton.bind(this)
    this.setMajors = this.setMajors.bind(this)
    this.state = {major:  "", items: [], idNumber: "", firstName: "", lastName: "", email:"", password: ""};
    api.majors.get(this.setMajors)
  }

  setMajors(majors){
    console.log(majors)
    this.setState({major: "",  items: majors,  idNumber: "", firstName: "", lastName: "", email:"", password: ""});
  }

  _onRegisterButton(){
    var student = {
      Campus: "SPS",
      Email: this.state.email,
      IdNumber: this.state.idNumber,
      Major: null,
      Name: this.state.firstName + " " + this.state.lastName,
      Password: this.state.password
    }
    console.log(student)
    api.students.create(student, function(res){
      console.log(res);
    });
  }
  render()
  {
    var listItems = this.state.items.map(function(item) {
      return (
        <Picker.Item  key={item.MajorId} label={item.Name} value={item.Id} />
      );
    });

    return (
      <View>
        <Text style={styles.titleText}>Registro</Text>

        <Text>Numero de Cuenta</Text>
        <TextInput onChangeText={(idNumber) => this.setState({idNumber})} value={this.state.idNumber}
            />

        <Text>Primer Nombre</Text>
        <TextInput onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName}
            />

         <Text>Apellido</Text>
         <TextInput onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName}
            />

          <Text>Email</Text>
          <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email}
             />

        <Text>Contraseña</Text>
          <TextInput onChangeText={(password) => this.setState({password})} value={this.state.password}
             password={true}
             />

        <Text>Carrera</Text>
        <Picker style = {styles.picker}
          selectedValue={this.state.major}
          onValueChange={(selectedMajor) => this.setState({major: selectedMajor})}>
          {listItems}
        </Picker>
      <Text></Text>
      <TouchableHighlight style={styles.button} underlayColor={'#00008b'} onPress={this._onRegisterButton}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableHighlight>
      </View>
      );

  }
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0000ff'

  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: 'aqua',
    marginLeft: 100
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  picker: {
    width: 300
  }
});

module.exports = Register;
