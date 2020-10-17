import React, {Component} from 'react';
import {Text, View,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import {Styles} from './Styletodo1';

export default class Todo1 extends Component {
    constructor() {
        super();
        this.state = {
          todos: ['Adi', 'Ahmad', 'Fauzan'],
          text: '',
          checklist: false,
        };
      }
    
      addTodo = () => {
        const {text, todos} = this.state;
    
        this.setState({
          todos: [text, ...todos],
        });
        
      };
    
      removeTodo = (index) => {
        const {todos} = this.state;
        this.setState({
          todos: todos.filter((todo, i) => i !== index),
        });
      };
    
      checklist = () => {
        this.setState({
          checklist: !this.state.checklist,
        });
      };
  
    render() {
    return (
      <View style={Styles.view1}>
        <View style={Styles.view2}>
          <Text style={Styles.textview2}> MY TODOS </Text>
        </View>
        <View
          style={Styles.textinput}>
          <TextInput
            placeholder="Masukan Catatan Anda"
            onChangeText={(inputan) => this.setState({text: inputan})}
          />
          <TouchableOpacity onPress={() => this.addTodo()}>
            <Text style={{marginRight: 10}}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.state.todos.map((value, index) => {
            return (
              <View
                key={index}
                style={Styles.view3}>
                <Text style={{color: '#fff', fontSize: 15}}>Edit</Text>
                <Text style={{color: '#fff', fontSize: 15}}>
                  {index + 1}
                  {value}
                </Text>
                <TouchableOpacity onPress={() => this.removeTodo(index)}>
                  <Text style={{color: '#fff', fontSize: 15}}>Hapus</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.checklist()}>
                  <Text style={{color: '#fff', fontSize: 15}}>
                    {this.state.checklist
                      ? 'Sudah Checklist'
                      : 'Belum Checklit'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
