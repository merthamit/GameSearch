import React, { useContext } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { CreateContext } from '../../Contexts/Context';
export default function SearchBar() {
    const getContext = useContext(CreateContext)
    const { searchWord, searching, filterWorld, deleteSearchingWord } = getContext
    return (
        <View style={styles.searchBar}>
            <TouchableOpacity
                onPress={ () => filterWorld() }
            >
                <FontAwesome name="search" size={25}  style={styles.searchIcon} color="white" />
            </TouchableOpacity>
            <TextInput
                placeholder='Search'
                autoCorrect={false}
                style={ styles.searchInput }
                autoCapitalize='none'
                maxLength={30}
                value={ searchWord }
                onChangeText={text => searching(text)}
                onSubmitEditing={() => filterWorld()}
                onEndEditing={ () => filterWorld() }
            />
            <TouchableOpacity
                onPress = { () => deleteSearchingWord() }
            >
                <AntDesign name="close" size={26} color="white" style={styles.closeIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        fontSize:22,
        flex:1,
        color:'white',
    },
    searchBar:{
        flexDirection:'row',
        marginTop:30,
        backgroundColor:'#454C43',
        borderRadius:10,
        marginHorizontal:10,
        borderWidth:2,
        borderColor:'#333'
    },
    searchIcon:{
        alignSelf:'center',
        marginHorizontal:10,
        padding:5,
    },
    closeIcon : {
        alignSelf:'center',
        marginVertical:5,
        marginHorizontal:5,
    }
})
