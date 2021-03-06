import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

class BookItem extends React.Component{
    render(){

        const book = this.props.books.volumeInfo
        const images = book.imageLinks

        return (
            <View style = {styles.main_container}>
                <Image
                    style={styles.image}
                    source={{}}
                />
                <View style = {styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style= {styles.title_text}> {book.title} </Text>
                    </View>
                    <View style= {styles.description_container}>
                        <Text style= {styles.description_text} numberOfLines={6}> {book.description} </Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}> {book.publishedDate}  </Text>
                    </View>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        height: 190,
        flexDirection: 'row'
    },

    image:{
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },

    header_container:{
        flex:3,
        flexDirection: 'row'
    },

    title_text:{
        fontWeight: 'bold',
        fontSize: 20,
        flex:1,
        flexWrap: 'wrap',
        paddingRight :5

    },

    content_container:{
        flex: 1,
        margin: 5
    },

    description_container:{
        flex:7
    },

    description_text:{
        fontStyle: 'italic',
        color: "#666666"
    },

    date_container:{
        flex:1
    },

    date_text:{
        textAlign: 'right',
        fontSize: 14
    }



})


export default BookItem