import React, { Component } from 'react';
import { AppRegistry, Image, View, TouchableWithoutFeedback, StyleSheet, Text, Modal,ScrollView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

class FirstScreen extends React.Component {

    static navigationOptions = {
        header: null,
    }
  state = { 
  }
  render() {
      const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <TouchableOpacity style={{width:'80%', height:50, backgroundColor: 'blue', borderRadius: 25, justifyContent:'center', alignItems:'center'}} 
            onPress={()=>navigate('Image')}>
              <Text style={{color: 'white', fontSize:32, fontWeight:'bold'}}>Show Modal</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent:'center',
   alignItems : 'center'
  },
});

export default FirstScreen;