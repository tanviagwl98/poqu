import React from 'react';
import {View, StatusBar,Text} from 'react-native';
import {styles} from './Home.styles';
import { LinearGradient } from 'expo-linear-gradient';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <LinearGradient 
      //colors={['#622774', '#ff7676']} 
      colors={["#d68ced", "#c53364"]}
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
      style={styles.box}
      >
        <View>  
          <Text style={styles.sectionTitle}>Welcome Aboard!</Text>
          <Text style={styles.sectionDescription}>
            This app is to bring to you all work done by Tanvi Agarwal under the name @prickedinsight, 
            be it poetry, quotes, books and may be more things are coming up in future to surprise you :).
          </Text>
        </View>
        </LinearGradient>
      </View>

    );
  }
}

export default Home;

