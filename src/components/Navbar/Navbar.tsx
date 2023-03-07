import React, { useRef } from 'react'
import './style.scss'

export const Navbar = () => {
    const navRef = useRef(null as unknown as HTMLElement);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    };
    return (
        <header className='NavbarContainer'>
            <div className="index">
                <h1 className='navbarBrand'>Watchflix</h1>
                <nav className='navbar' ref={navRef}>
                    <ul className='navbarOptions'>
                        <li className='navbarOption'>Home</li>
                        <li className='navbarOption'>Movies</li>
                        <li className='navbarOption'>Last Watch</li>
                        <li className='navbarOption'>Favorites</li>
                    </ul>
                    <div className="actions">
                        <div className="searchBox">

                            <input type="checkbox" id="searchToggle" />
                            <label htmlFor="searchToggle" className="searchToggleIcon"><span className="material-symbols-outlined searchIcon">
                                search
                            </span>
                            </label>
                            <input type="text" className='searchBoxInput' placeholder='Pesquise um título' />

                        </div>

                        <div className="userAccount">
                            <img className='userImg' src="https://media.licdn.com/dms/image/D4D35AQFLC1gPJx2Miw/profile-framedphoto-shrink_800_800/0/1654873367191?e=1678759200&v=beta&t=0-rglg0dZn5GjDVFrz6Z6eekfK8E-ukZPMqHbyyVYF0" alt="user image" />
                            <span>Luizão Manzola</span>
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