interface movie {
    id: number,
    backdrop: string,
    poster: string,
    title: string,
    rate: number,
    runtime: number
    genre: string[],
}

interface IState {
    user: {
        inforUser: string[]
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