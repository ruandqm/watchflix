import React, { useRef, useState } from 'react'
import './style.scss'

export const Navbar = () => {
    const navRef = useRef(null as unknown as HTMLElement)
    const checkboxRef = useRef(null as unknown as HTMLInputElement)
    const [search, setSearch] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    // let eventIsProcessed = false

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
                            {/*  <img className='userImg' src="https://media.licdn.com/dms/image/D4D35AQFLC1gPJx2Miw/profile-framedphoto-shrink_800_800/0/1654873367191?e=1678759200&v=beta&t=0-rglg0dZn5GjDVFrz6Z6eekfK8E-ukZPMqHbyyVYF0" alt="user image" />
                            <span>Luizão Manzola</span> */}
                            <a href="/logon">Login</a>
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