const initialState = {
    bbChars: [],
    favChars: []
};

const SET_BBCHARS = 'SET_BBCHARS';
const SET_FAVCHARS = 'SET_FAVCHARS';

export function setBbChars(arr) {
    return {
        type: SET_BBCHARS,
        payload: arr
    }
}

export function setFavChars(arr) {
    return {
        type: SET_FAVCHARS,
        payload: arr
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_BBCHARS:
            return {
                ...state,
                bbChars: payload
            }
        case SET_FAVCHARS:
            return {
                ...state,
                favChars: payload
            }
        default: return state;
    }
}