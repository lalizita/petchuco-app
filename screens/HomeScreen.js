import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen(){
  return(
    <View>
      <ScrollView>
      <Image
            source={require('../assets/images/site/img01.jpg')}
            style={styles.welcomeImage}
          /> 
        <Text>TESTANDO PETCHUCÃO!</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#72eddd',
  },
  welcomeImage: {
    height: 200,
    resizeMode: 'cover',
  },
})