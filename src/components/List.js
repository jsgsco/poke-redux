import { useSelector, useDispatch } from 'react-redux'
import { getPokemonInfo, nextPokemons, prevPokemons } from '../redux/pokeDucks'

const List = () => {

    const pokemons = useSelector(store => store.pokemons.results)
    const prev = useSelector(store => store.pokemons.previous)
    const next = useSelector(store => store.pokemons.next)
    const dispatch = useDispatch()

    return ( 
        <div className="bg-gray-800 w-2/4 h-3/5 p-5 rounded-lg ">
            <h1 className="text-center font-bold italic text-red-500 text-2xl">POKEDEX</h1>
            <div className="p-px bg-gray-700 rounded-lg mt-2"></div>
            <div className="overflow-y-auto w-full h-96 mt-2 p-3">
                {
                    pokemons.map(({name, url}) => (
                        <div className="flex w-full py-2 justify-between items-center" key={name}>
                            <p className="font-bold uppercase text-sm">{name}</p>
                            <button
                                type="button"
                                className="bg-red-500 py-2 px-5 rounded-lg hover:bg-red-600 font-bold uppercase text-sm"
                                onClick={ () => dispatch( getPokemonInfo(url) ) }
                            >View</button>
                        </div>
                    ))
                }
            </div>
            <div className="mt-2">
                {
                    prev && (
                        <button 
                            type="button"
                            className="w-full bg-red-500 hover:bg-red-600 p-2 rounded-lg font-bold uppercase text-sm"
                            onClick={ () => dispatch( prevPokemons() ) }
                        >Previous</button>
                    )
                }
                {
                    next && (
                        <button 
                            type="button"
                            className="w-full bg-red-500 hover:bg-red-600 p-2 rounded-lg mt-2 font-bold uppercase text-sm"
                            onClick={ () => dispatch( nextPokemons() ) }
                        >Next</button>
                    )
                }
            </div>
        </div>
     );
}
 
export default List;