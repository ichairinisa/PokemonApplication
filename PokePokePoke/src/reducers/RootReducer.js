import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonDetailReducer from "./PokemonDetailReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  PokemonDetail: PokemonDetailReducer
});

export default RootReducer;