export function setInforUser(inforUser: string[]) {
    return {
        type: 'VALUE_INFOR_USER',
        payload: inforUser
    }
}

export function setFavoriteUser(favorite: number) {
    return {
        type: 'VALUE_FAVORITE_USER',
        payload: favorite
    }
}