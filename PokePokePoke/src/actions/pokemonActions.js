import axios from 'axios';

export const GetPokemonList = () => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING',
    });

    const perPage = 50;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}`,
    );

    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_LIST_FAIL',
    });
  }
};

export const GetPokemonDetail = pokemon => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_DETAIL_LOADING',
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: 'POKEMON_DETAIL_SUCCESS',
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_DETAIL_FAIL',
    });
  }
};
