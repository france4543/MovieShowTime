import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesList from './screens/MoviesList'
import MovieDetail from './screens/MovieDetail'

const Stack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesList"
        component={MoviesList}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
