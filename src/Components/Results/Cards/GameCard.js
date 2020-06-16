import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function GameCard({ game }) {
    const { name, year, type, platform, image } = game
    return (
        <View style={styles.card}>
            <View style={styles.items}>
                <View style={styles.containImg}>
                    <Image
                        source={{
                            uri: image,
                        }}
                        style={styles.image}
                    />
                </View>
            
                <View style={styles.informations}>
                    <Text style={styles.information} > Name: {name} </Text>
                    <Text style={styles.information} > Year: {year} </Text>
                    <Text style={styles.information} > Type: {type} </Text>
                    <Text style={styles.information} > Platform: {platform} </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        flex: 1,
        height:'100%',
        width:'100%',
        resizeMode: 'cover'
    },
    items : {
        borderColor:'gray',
        height:'96%',
    },
    containImg : {
        height:400,
        width:'90%',
        alignSelf:'center'
    },
    card : {
        width:'80%',
        height:550,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#CD9FCC',
        alignSelf:'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10
    },
    informations : {
        alignSelf:'center',
        width:'90%'
    },
    information : {
        color : 'white',
        backgroundColor : '#333',
        width:'100%',
        textAlign:'center',
        padding:6,
        borderTopWidth:1.4,
        borderColor:'gray'
    }
})
