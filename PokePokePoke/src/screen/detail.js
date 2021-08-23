import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {GetPokemonDetail} from '../actions/pokemonActions';
import {useDispatch, useSelector} from 'react-redux';

const Details = props => {
  // const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   fetchPokemonDetails();
  // }, []);

  // const fetchPokemonDetails = () => {
  //   const {state} = props.navigation;
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
  //     .then(res => res.json())
  //     .then(details => setDetails(details));
  // };

  const dispatch = useDispatch();
  const details = useSelector(state => state.PokemonDetail);
  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = pokemon => {
    dispatch(GetPokemonDetail(pokemon));
  };

  return details.name ? (
    <SafeAreaView>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name}.png`,
          }}
        />
        <Text style={styles.text}>Name: {details.name}</Text>
        <Text style={styles.text}>Height: {details.height}</Text>
        <Text style={styles.text}>Weight: {details.weight}</Text>
        <Text style={styles.text}>
          Ability: {details.abilities[0].ability.name}
        </Text>
        <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#E63F34" />
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
