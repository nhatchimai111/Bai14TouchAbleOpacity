// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai14TouchAbleOpacity extends Component {

  onclickMe(){

    console.log('YOU CLICK ME: FUNCTION')
  }

  render() {
    return (

      <TouchableOpacity onPress={()=>{this.onclickMe()}}> 
      
        <View style={{backgroundColor:'green', width:100, height:20, margin:100}}></View>

      </TouchableOpacity>
    );
  }
}




// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai14TouchAbleOpacity', () => Bai14TouchAbleOpacity);
