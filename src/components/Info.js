import { useSelector } from 'react-redux'

const Info = () => {

    const pokeinfo = useSelector(store => store.pokemons.info)

    if(!pokeinfo) return null

    return ( 
        <div className="w-full bg-gray-800 p-5 rounded-lg flex flex-col items-center">
            <img src={pokeinfo.sprites.other.dream_world.front_default} alt={pokeinfo.name}/>
            <p className="font-bold italic text-red-500 text-2xl uppercase mt-5">{pokeinfo.name}</p>
            <div className="mt-1 w-full bg-gray-700 rounded-lg text-center py-3">
                <p className="font-bold italic text-red-500 uppercase mb-1">Size</p>
                <p className="text-xs uppercase">Weight {pokeinfo.weight}</p>
                <p className="text-xs uppercase">Height {pokeinfo.height}</p>
            </div>
        </div>
     );
}
 
export default Info;