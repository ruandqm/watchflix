import { useNavigate } from "react-router-dom";

let userLocalStorage = localStorage.getItem('user')

let arrayUser = JSON.parse(userLocalStorage != undefined ? userLocalStorage : '[]')

export function Logout() {
    if (arrayUser.length == 0) {
        alert('Primeiramente faça o Login')
        window.location.replace('/logon')
    }
}