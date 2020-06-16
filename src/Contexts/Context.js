import React, { Component, createContext } from 'react'
import { Text, View } from 'react-native'

export const CreateContext = createContext()

class Context extends Component {
    constructor(props){
        super(props)
        this.state = {
            films : [
                { name: 'GTA', year:2013, type: 'Action', platform: 'Pc', image: 'https://cdn.akakce.com/rockstar/grand-theft-auto-5-ps4-z.jpg', goty : true },
                { name: 'Fortnite', year:2017, type: 'Action', platform: 'Pc', image: 'https://www.flankesports.com/content/images/games/lg/fortnite.jpeg', goty : false },
                { name: 'Overcooked', year:2016, type: 'Funny', platform: 'Pc', image: 'https://s3.gaming-cdn.com/images/products/1625/271x377/overcooked-cover.jpg', goty : false },
                { name: 'The Last of Us', year:2013, type: 'Action', platform: 'PlayStation', image: 'https://upload.wikimedia.org/wikipedia/tr/c/c5/The-last-of-us-cover.png', goty : false },
                { name: 'Minecraft', year:2009, type: 'Craft', platform: 'PlayStation and Pc', image: 'https://cdn.akakce.com/microsoft/minecraft-z.jpg', goty : true },
            ],
            filterFilms : [],
            searchWord : ''
        }
        this.searching = this.searching.bind(this)
        this.filterWorld = this.filterWorld.bind(this)
        this.deleteSearchingWord = this.deleteSearchingWord.bind(this)
        this.filterGoty = this.filterGoty.bind(this)
        this.filterNormal = this.filterNormal.bind(this)
        this.filterAllGames = this.filterAllGames.bind(this)
    }
    
    filterAllGames(){
        const { films } = this.state
        const filter = films.filter( item => item.goty == true || item.goty == false)
        this.setState(oldState => ({
            filterFilms : filter,
            searchWord : ''
        }))
    }

    filterGoty(){
        const { films } = this.state
        const filter = films.filter( item => item.goty == true )
        this.setState(oldState => ({
            filterFilms : filter,
            searchWord : ''
        }))
    }

    filterNormal(){
        const { films } = this.state
        const filter = films.filter( item => item.goty == false )
        this.setState(oldState => ({
            filterFilms : filter,
            searchWord : ''
        }))
    }

    searching(word){
        this.setState(oldState => ({
            searchWord : word
        }), () => this.filterWorld())
    }

    deleteSearchingWord(){
        this.setState(oldState => ({
            searchWord : ''
        }), () => this.filterWorld())
    }

    filterWorld(){
        if(this.state.filterFilms){
            const { searchWord, films } = this.state
            const word = searchWord.toLowerCase()
            const filter = films.filter( item => item.name.toLowerCase().includes(word))
            this.setState(oldState => ({
                filterFilms : filter
            }))
            return true    
        }
        this.setState({
            filterFilms : this.state.films
        })
    }

    render() {

        const values = {
            allGames: this.state.films,
            searchWord : this.state.searchWord,
            searching : this.searching,
            filterWorld : this.filterWorld,
            filterFilms : this.state.filterFilms,
            deleteSearchingWord : this.deleteSearchingWord,
            filterGoty : this.filterGoty,
            filterNormal : this.filterNormal,
            filterAllGames : this.filterAllGames
        }

        return (
            <CreateContext.Provider
                value={values}
            >
                {this.props.children}
            </CreateContext.Provider>
        )
    }
}
export default Context
