import React from 'react';
import { StyleSheet,View,TextInput,Button } from 'react-native';


class Search extends React.Component{
    render(){
        return (
            <View style = {styles.mainContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder= "Nom de l'auteur"
                />
                <Button style={styles.searchButton} title="Rechercher" onPress={() => {}}/>
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


    searchButton:{

    }

})
export default Search