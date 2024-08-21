import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kategori2 from './Kategori2'; // Pastikan file ini ada
import CartScreen from './CartScreen'; // Pastikan file ini ada
import FavoriteScreen from './FavoriteScreen'; // Pastikan file ini ada

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Kategori" component={Kategori2} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
