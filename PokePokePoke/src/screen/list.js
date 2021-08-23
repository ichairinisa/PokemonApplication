import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import textPokemon from '../../assets/img/pokemon-text.png';
import {GetPokemonList} from '../actions/pokemonActions';

const PokemonList = ({navigation}) => {
  const [searchfeild, setSearchfeild] = useState('');
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.PokemonList);
  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(GetPokemonList());
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <Image source={textPokemon} style={styles.contentImage} />
        </View>

        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchfeild}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchfeild(value)}
            value={searchfeild}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            {pokemons.data
              .filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()),
              )
              .map((pokemon, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    style={styles.card}
                    onPress={() => navigation.navigate('Details')}>
                    <Image
                      style={{width: 150, height: 150}}
                      source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                      }}
                    />
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default PokemonList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  contentImage: {
    padding: 10,
    height: 150,
    width: 300,
    resizeMode: 'contain',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
  },
  searchCont: {
    position: 'relative',
    padding: 20,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    zIndex: 1,
    // backgroundColor: 'orange',
  },
  searchfeild: {
    height: 50,
    borderWidth: 1,
    textAlign: 'center',
    width: 350,
    borderRadius: 50,
    borderColor: 'blue',
  },
});
