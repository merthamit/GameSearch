import React, { useContext } from 'react'
import { View, ScrollView, StyleSheet, FlatList } from 'react-native'
import { CreateContext } from '../../Contexts/Context'
import GameCard from './Cards/GameCard'
import GameYearCard from './Cards/GameYearCard'

export default function Games() {
    const getContext = useContext(CreateContext)
    const { allGames, filterFilms, searchWord } = getContext
    return (
        <View>
            <FlatList
                data={ filterFilms }
                renderItem={ ({item}) => item.goty ? <GameYearCard game={item} /> : <GameCard game={item} /> }
                keyExtractor={ item => item.name }
            />
        </View>
    )
}

