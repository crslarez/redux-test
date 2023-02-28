import PokemonCard from "./PokemonCard";
import './PokemonList.css';
const PokemonList = ({ pokemons }) => {
    return (
        <div className="pokemon-list">
        {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
    );
    }

    PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
    };

    export default PokemonList;