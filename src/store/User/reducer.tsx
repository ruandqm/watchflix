const INITIAL_VALUES = {
    inforUser: []
}

interface IAction {
    type: string
    payload: any
}

export default function userRecucer(state = INITIAL_VALUES, action: IAction) {
    switch (action.type) {
        case ('VALUE_INFOR_USER'):
            return {
                ...state,
                nameUser: action.payload
            }
        default:
            return state
    }
}