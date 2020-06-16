import React, { useContext } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { CreateContext } from '../Contexts/Context'
import SearchBar from './SearchTools/SearchBar'
import Games from './Results/Games'
import { YellowBox } from 'react-native';
import SearchFilter from './SearchTools/SearchFilter'

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
const SearchScreen = () => {
    
    return (
        <ScrollView style={styles.scroll}>
            <SearchBar/>
            <SearchFilter/>
            <Games/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll : {
        backgroundColor : '#fff',
        flex:1
    }
})

export default SearchScreen
