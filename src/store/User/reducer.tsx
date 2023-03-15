let userLocalStorage = localStorage.getItem('user')

const INITIAL_VALUES = {
    inforUser: JSON.parse(userLocalStorage != undefined ? userLocalStorage : '[]')
}

export default function userRecucer(state = INITIAL_VALUES, action: IAction) {
    switch (action.type) {
        case ('VALUE_INFOR_USER'):
            return {
                ...state,
                inforUser: action.payload
            }
        default:
            return state
    }
}