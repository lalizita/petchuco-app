import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, Button, Image, Card, ListItem, Text, Icon } from 'react-native-elements'

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      // <View style={styles.container}>
      //   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      //   <AppNavigator />
      // </View>
      <ScrollView style={styles.container}>
        <ThemeProvider>
       
          <Button title="Olha o Petchuco" />
          {/* <Button title="My 2nd Button" /> */}
          <View style={styles.productsSection}>
          <Card
            title='Ração para cão'
            image={{uri:'https://araujo.vteximg.com.br/arquivos/ids/3908258-1000-1000/07898914000550.jpg?v=636965768053770000'}}>
            <Text style={{marginBottom: 10}}>
              Muito gostosa para o seu pitbull!uuuuuusafas
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Adicionar ao carrinho' />
          </Card>
          <Card
            title='Ração para cão'
            image={{uri:'https://araujo.vteximg.com.br/arquivos/ids/3908258-1000-1000/07898914000550.jpg?v=636965768053770000'}}>
            <Text style={{marginBottom: 10}}>
              Muito gostosa para o seu pitbull!
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Adicionar ao carrinho' />
          </Card>
          </View>
        </ThemeProvider>
      </ScrollView>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#72eddd',
  },
  productsSection: {
    flex:1,
    flexDirection: 'column',
    alignContent:'stretch'
  }
});
