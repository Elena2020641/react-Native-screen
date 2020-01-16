/*Example to add or remove flatlist item with animation*/
import React, { Component } from 'react';
//Import React
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
//Import basic react native components
import Card from './Card';
//Import custom card component

import img0 from '../app/img/1.jpg';
import img1 from '../app/img/2.jpg';
import img2 from '../app/img/3.jpg';
import img3 from '../app/img/4.jpg';
import img4 from '../app/img/5.jpg';
import img5 from '../app/img/6.jpg';
 
console.disableYellowBox = true;
 
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const imageUrl = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png';
const cards = [
    {
        key: 0,
        uri: img0,
    },
    {
        key: 1,
        uri: img1,
    },{
        key: 2,
        uri: img2,
    },{
        key: 3,
        uri: img3,
    },{
        key: 4,
        uri: img4,
    },{
        key: 5,
        uri: img5,
    },
];
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards,
    };
  }
  
  setAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 250,
      update: {
        type: LayoutAnimation.Types.easeIn,
        springDamping: 0.7,
      },
    });
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
    });
  };
 
  addItem = (() => {
    let key = cards.length;
    return () => {
      const { cards } = this.state;
      cards.unshift({
        key,
        uri: imageUrl,
        animated: true,
      });
      this.setAnimation();
      this.setState({
        cards: cards.slice(0),
      });
      key++;
    };
  })();
 
  removeItem = key => {
    const { cards } = this.state;
    this.setAnimation();
    this.setState({
      cards: cards.slice().filter(card => card.key !== key),
    });
  };
 
  renderItem = ({ item }) => <Card item={item} removeItem={this.removeItem} />;
 
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={this.addItem}>
            <Text style={styles.addIcon}>Add Image</Text>
          </TouchableOpacity>
          <FlatList
            contentContainerStyle={styles.paragraph}
            data={this.state.cards}
            renderItem={this.renderItem}
            ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
            keyExtractor={item => item.key.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
//   paragraph: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//     paddingBottom: 10,
//   },
  addButton: {
    width: '100%',
    elevation: 3,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  addIcon: {
    color: 'white',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});