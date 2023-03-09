import './style.scss'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { useEffect } from 'react'
import axios from 'axios'

export const Home = () => {
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://api.themoviedb.org/3//movie/popular?api_key=a2dc52189308fdeb269067a59d420f4b')
            console.log(response.data)
        }
        getData()
    }, [])
    return (
        <div className="HomeContainer">
            <div className="container">
                <section className="heroSection">
                    <Navbar />
                </section>
            </div>
            <Footer />
        </div>
    )
}