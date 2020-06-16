import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { CreateContext } from '../../Contexts/Context'

const SearchFilter = () => {
    const getContext = useContext(CreateContext)
    const { filterGoty, filterNormal, filterAllGames } = getContext

    return (
        <View style={styles.filters}>
            <TouchableOpacity
                onPress={ () => filterGoty() }
            >
                <Text style={styles.goty}>Game Of The Year</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => filterNormal() }
            >
                <Text style={styles.normal}>Normal Game</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => filterAllGames() }
            >
                <Text style={styles.all}>All Games</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    goty : {
        borderColor : 'gray',
        borderWidth : 1.4,
        backgroundColor:'#FFD700',
        color : '#fff',
        padding : 5,
        marginHorizontal : 4,
        borderRadius:5
    },
    all : {
        borderWidth : 1.4,
        borderColor : 'gray',
        padding : 5,
        backgroundColor : '#333',
        marginHorizontal : 4,
        color : '#fff',
        borderRadius:5
    },
    normal : {
        borderWidth : 1.4,
        borderColor : 'gray',
        padding : 5,
        backgroundColor : '#CD9FCC',
        marginHorizontal : 4,
        color : '#fff',
        borderRadius:5
    },
    filters : {
        flexDirection:'row',
        alignSelf:'center',
        marginTop : 10
    }
})
