import React, { useRef, useState } from 'react'
import './style.scss'
import { useSelector } from 'react-redux'


export const Navbar = () => {
    const navRef = useRef(null as unknown as HTMLElement)
    const checkboxRef = useRef(null as unknown as HTMLInputElement)
    const [search, setSearch] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    // let eventIsProcessed = false

    const user = useSelector((state: IState) => state.user)

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const clickSearchHandler = () => {
        if (isChecked && search.length != 0) {
            window.location.replace(`/search/${search}`)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            clickSearchHandler()
        }
    }


    return (
        <header className='NavbarContainer'>
            <div className="index">
                <a href="/"><h1 className='navbarBrand'>Watchflix</h1></a>
                <nav className='navbar' ref={navRef}>
                    <ul className='navbarOptions'>
                        <li className='navbarOption'><a href="/">Home</a></li>
                        <li className='navbarOption'><a href="/movies">Movies</a></li>
                        <li className='navbarOption'><a href="/lastWatch">Last Watch</a></li>
                        <li className='navbarOption'><a href="/favorites">Favorites</a></li>
                    </ul>
                    <div className="actions">
                        <div className="searchBox">

                            <input type="checkbox" id="searchToggle" ref={checkboxRef} onClick={() => setIsChecked(checkboxRef.current.checked)} />
                            <label htmlFor="searchToggle" className="searchToggleIcon" ><span onClick={clickSearchHandler} className="material-symbols-outlined searchIcon">
                                search
                            </span>
                            </label>
                            <input type="text" onChange={(event) => setSearch(event.target.value)} onKeyDown={handleKeyDown} className='searchBoxInput' placeholder='Pesquise um título' />

                        </div>

                        <div className="userAccount">
                            {user.inforUser.length > 0 ? (
                                <>
                                    <img className='userImg' src={user.inforUser[2]} alt="user image" />
                                    <span>{`${user.inforUser[0]} ${user.inforUser[1]}`}</span>
                                </>
                            ) : <a href="/logon">Login</a>}
                        </div>
                    </div>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </nav>
            </div>


            <button className="nav-btn" onClick={showNavbar}>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </button>
        </header>
    )
}