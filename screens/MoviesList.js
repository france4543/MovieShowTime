import React, {useEffect,useState} from 'react'
import { View, Text, TouchableHighlight, ActivityIndicator, FlatList ,StyleSheet,Image} from 'react-native'
import axios from 'axios'

export default function MoviesList({navigation}) {

    const[movies,setMovies] = useState([])
    const [isLoading,setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://movie-api.igeargeek.com/movies`)
            .then(res => {
            const movies = res.data.data;
            setMovies(movies)
            setLoading(false)
        })
      }, [])

      if (isLoading){
          return(
            <View style={{flex:1,justifyContent:'center'}} >
                <ActivityIndicator/>
            </View>
          )
          
      }
 
    return (
        <View style={{flex: 1}}>
            <FlatList
                 data={movies}
                numColumns={2}
                horizontal={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return( 
                        <TouchableHighlight
       	                    style={styles.cardMovie}
                            activeOpacity={1}
                            onPress={() =>
            		            navigation.navigate(
                                'MovieDetail',
                                { id: item.id }
                                )
                            }>
       	                    <View style={styles.movieImage}>
                                <Image source={{uri: item.posterUrl}}
                                        style={styles.movieImage} />
            		                <View style={{padding: 20}}>
                  		                <Text style={styles.textDate}>{item.showingAt}</Text>
                  		                <Text style={styles.textTitle}>{item.name}</Text>
                                    </View>
                            </View>
                        </TouchableHighlight>
                    )
                       
                    
                }}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    textDate: {
    },
    textTitle: {
    },
    cardMovie: {
    },
    movieImage: {
        height:300
    },
 })
 