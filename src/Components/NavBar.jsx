import { NavLink } from 'react-router-dom'
import Logo from '../Img/icono.png'
import SearchBar from './SearchBar'
import s from './Nav.module.css'


export default function Nav({onSearch}){
    return(
        <nav className={s.contenedor}>
            <div>
                <NavLink className={s.home} to='/'>
                    <img src={Logo} width="70" height="40" alt="weather" />
                    <span>Proyect - Weather App</span>
                </NavLink>
            </div>
            <div>
                <NavLink className={s.home} to='/about'>
                    <span>About</span>
                </NavLink>
            </div>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}