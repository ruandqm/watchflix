interface movie {
    id: number,
    backdrop: string,
    overview: string,
    poster: string,
    title: string,
    rate: number,
    runtime: number
    genre: any,
    trailers: any
}
interface genre {
    id: number,
    name: string
}

interface IState {
    user: {
        inforUser: string[]
        favorite: number
    }
}

interface ILogon {
    emailAnddressLogin?: string
    passwordLogin?: string
    firstName?: string
    lastName?: string
    passwordRegister?: string
    emailAnddressRegister?: string
    phone?: string
    url?: string
}

interface IAction {
    type: string
    payload: any
}
