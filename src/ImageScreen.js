import React, { Component, useState } from 'react';
import { AppRegistry, Image, View, TouchableWithoutFeedback, StyleSheet, Text, Modal,ScrollView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import img0 from '../app/img/1.jpg';
import img1 from '../app/img/2.jpg';
import img2 from '../app/img/3.jpg';
import img3 from '../app/img/4.jpg';
import img4 from '../app/img/5.jpg';
import img5 from '../app/img/6.jpg';

import CloseImg from '../app/img/close.png';
const arr = [img1, img2, img3, img4, img5];

export default class ImageScreen extends Component {
  static navigationOptions = {
      header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      image: img0,
      tempArr : arr,
      currentItem: 0,
    };
  }

  RenderImage(){
    ListArr = [];
    var len = arr.length;
    for( let i = 0 ; i < len ; i++ ){
      const img = this.state.tempArr[i];
      ListArr.push(
        <TouchableOpacity style = {{justifyContent:'center', alignItems:'center', width: 100, height:'100%'}} onPress = {()=>this.change(i)} >
          <Image style={{width:80, height:50}}  source={img}></Image>
        </TouchableOpacity>
      );
    }
    return ListArr;
  }

change(id){
  let tImage = this.state.tempArr[id];
  var len = arr.length;

  let tt = [];
  let temp = this.state.tempArr;
  this.state.tempArr=[];

  tt.push(this.state.image);

  for( var i = 0 ; i < len ; i++ )
  {
    if( i == id)
      continue;
    tt.push(temp[i]);
  }

  this.setState({image:tImage, tempArr: tt, currentItem: id});

}

render() {
  const {navigate} = this.props.navigation;
  const data = this.state.tempArr.slice(1);
  return (
    <View style={styles.container}>
      <Image style={styles.imagewrap} source={this.state.image}></Image>
      <TouchableOpacity style={styles.closeimg} onPress={()=>navigate('First')}>
          <Image style={{width:15, height: 15}} source={CloseImg} ></Image>
      </TouchableOpacity>
      <ScrollView style={{height:'20%', flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.RenderImage()}
      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-between',
    // backgroundColor: 'red',
  },
  imagewrap: {
    width: "100%",
    height:'90%',
  },
  closeimg : {
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    top : 10,
    right: 10,
    width: 20,
    height: 20,
    zIndex: 1
  }
});

