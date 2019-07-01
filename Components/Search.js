import React from 'react';
import {StyleSheet,View,TextInput,Button,FlatList} from 'react-native';
import BookItem from "./BookItem"
import {getBooksWithSearch} from "../API/API_BOOKS"


class Search extends React.Component{

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state= {books: [] }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    _loadBooks(){
        if (this.searchedText.length > 0) {
            getBooksWithSearch(this.searchedText).then(data => {
                this.setState({books:data.items})
            })
        }
    }

    render(){

       // getBooksWithSearch(this.searchedText).then(data => console.log(data.items))
        return (
            <View style = {styles.mainContainer}>
                <TextInput
                    style ={styles.textInput}
                    placeholder="Nom de l'auteur"
                    onChangeText = {(text) => this._searchTextInputChanged(text)}
                />
                <Button title="Rechercher" onPress={() => this._loadBooks()}/>
                <FlatList
                    data={this.state.books}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <BookItem books={item}/>}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex :1 ,
        marginTop:30
    },

    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
})

export default Search