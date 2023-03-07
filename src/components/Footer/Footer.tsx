import './style.scss'

export const Footer = () => {
    return (
        <footer className='FooterContainer'>
            <div className="generalSection">
                <h2 className='footerBrand'>Watchflix</h2>
                <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et.</p>
                <div className="inputSection">
                    <label htmlFor='newsLetterSubscribe' className='joinNewslettersLabel'>Join Newsletters</label>
                    <div className="inputBox" id='newsLetterSubscribe'>
                        <input type="text" className='joinNewslettersInput' placeholder='Insert your e-mail here' />
                        <button className='send'><span className="material-symbols-outlined">
                            arrow_forward
                        </span></button>
                    </div>
                </div>

            </div>
            <div className="detailsSection">
                <div className="infos">
                    <ul className='infoMap'>
                        <li>Products</li>
                        <li>Movies</li>
                        <li>TV Show</li>
                        <li>Video</li>
                    </ul>
                    <ul className='infoMap'>
                        <li>Products</li>
                        <li>Movies</li>
                        <li>TV Show</li>
                        <li>Video</li>
                    </ul>
                    <ul className='infoMap'>
                        <li>Products</li>
                        <li>Movies</li>
                        <li>TV Show</li>
                        <li>Video</li>
                    </ul>
                </div>
                <div className="contactInfos">
                    <div className="infoItem">
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <span>8819 Ohio St. South Gate, California 90280</span>
                    </div>

                    <div className="infoItem">
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                        <span>ourstudio@hello.com</span>
                    </div>

                    <div className="infoItem">
                        <span className="material-symbols-outlined">
                            call
                        </span>
                        <span>+271 386-647-3637</span>
                    </div>

                </div>
            </div>

        </footer>
    )
}
