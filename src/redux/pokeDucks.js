import axios from 'axios'

const initialState = {
    count: 0,
    next: undefined,
    previous: undefined,
    results: [],
    info: undefined
}

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
const GET_POKEMON_INFO_SUCCESS = 'GET_POKEMON_INFO_SUCCESS'
const GET_POKEMON_NEXT_SUCCESS = 'GET_POKEMON_NEXT_SUCCESS'
const GET_POKEMON_PREV_SUCCESS = 'GET_POKEMON_PREV_SUCCESS'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return { ...state, ...action.payload }
        case GET_POKEMON_INFO_SUCCESS:
            return { ...state, info: action.payload }
        case GET_POKEMON_NEXT_SUCCESS:
            return { ...state, ...action.payload }
        case GET_POKEMON_PREV_SUCCESS: 
            return { ...state, ...action.payload }
        default: 
            return state
    }
}

export const getPokemons = () => (dispatch) => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            dispatch({
                type: GET_POKEMONS_SUCCESS,
                payload: res.data
            })
        })
}

export const getPokemonInfo = (url) => (dispatch) => {
    if(url === undefined) {
        url = 'https://pokeapi.co/api/v2/pokemon/1/'
    }

    axios.get(url)
    .then(res => {
        dispatch({
            type: GET_POKEMON_INFO_SUCCESS,
            payload: res.data
        })
    })
}

export const nextPokemons = () => (dispatch, getState) => {
    const { next } = getState().pokemons
    axios.get(next)
        .then(res => {
            dispatch({
                type: GET_POKEMON_NEXT_SUCCESS,
                payload: res.data
            })
        })
}

export const prevPokemons = () => (dispatch, getState) => {
    const { previous } = getState().pokemons
    axios.get(previous)
        .then(res => {
            dispatch({
                type: GET_POKEMON_PREV_SUCCESS,
                payload: res.data
            })
        })
}