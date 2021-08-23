
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import PokemonList from './src/screen/list';
import Detail from './src/screen/detail';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/store';


const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
       <Stack.Navigator> 
         <Stack.Screen name="List" component={PokemonList} />
         <Stack.Screen name="Detail" component={Detail} />
       </Stack.Navigator>
     </NavigationContainer>
    </Provider>
    
    
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
