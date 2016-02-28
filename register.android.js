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

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

class Register extends Component{
	contructor(props){
		super(props)
    this._onRegisterButton = this._onRegisterButton.bind(this)
	}
  _onRegisterButton(name, email, password ){

  }
  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _degree(degree_in) {

    this.setState({
      ...this.state,
      my_degree: degree_in
    });
  }
	render()
	{
		return (
      <View>
        <Text>Register</Text>
        <Text>First Name</Text>
        <TextInput/>
        <Text>Last Name</Text>
        <TextInput/>
        <Text>Email</Text>
        <TextInput/>
        <Text>Password</Text>
        <TextInput password={true}/>

       <Select
             width={250}
             ref="SELECT1"
             optionListRef={this._getOptionList.bind(this)}
             defaultValue="Selccione Carrera"
             onSelect={this._degree.bind(this)}>
             <Option>Ingenieria Sistemas</Option>
             <Option>Ingenieria Mecatronica</Option>
             <Option>Ingenieria Industrial</Option>
             <Option>Ingenieria Civil</Option>
             <Option>Ingenieria Gestion Logistica</Option>
             <Option>Ingenieria Telecomunicaciones</Option>
             <Option>Lic Diseno Grafico</Option>
             <Option>Lic Relaciones Internacionales</Option>
             <Option>Lic Finanzas</Option>
             <Option>Lic Adm Empresas Turisticas</Option>
             <Option>Lic Adm Industrial y de Negocios</Option>
             <Option>Lic Derecho</Option>
             <Option>Lic Mercadotecnia</Option>
             <Option>Lic Psicologia</Option>
             <Option>Arquitectura</Option>

           </Select>

      <TouchableHighlight>
        <Text>Register</Text>
      </TouchableHighlight>
      </View>
		);
	}
}
