import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from './src/Contexts/Context';
import SearchScreen from './src/Components/SearchScreen';
import Games from './src/Components/Results/Games';

export default function App() {
  return (
    <Context>
        <SearchScreen/>
    </Context>
  )
}

