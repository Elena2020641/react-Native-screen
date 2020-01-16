/*Example to add or remove flatlist item with animation*/
import React from 'react';
//Import React
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
//Import basic react native components
 
export default class Card extends React.Component {
  render() {
    const { removeItem, item } = this.props;
    const { uri, key } = item;
    return (
      <Animated.View style={{ flex:1, alignItems: 'center', paddingVertical:10 }}>
        <TouchableOpacity
          onPress={() => removeItem(key)}
          style={styles.container}>
          <Image style={styles.thumbnail} source={{ uri }} />
          {/* <View style={styles.metaDataContainer}>
            <View style={styles.metaDataContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View> */}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  metaDataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  metaDataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: '#444',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#888',
    fontWeight: '700',
  },
});