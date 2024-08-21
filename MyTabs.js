import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartScreen from './CartScreen';
import Kategori2 from './Kategori2';
import Kategori1 from './Kategori1';
import FavoriteScreen from './FavoriteScreen'; 

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'Home' : 'Home-outline';
          } else if (route.name === 'Kategori') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" components={Kategori1} />
      <Tab.Screen name="Kategori" components={Kategori2} />
      <Tab.Screen name="Cart" components={CartScreen} />
      <Tab.Screen name="Favorites" components={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;