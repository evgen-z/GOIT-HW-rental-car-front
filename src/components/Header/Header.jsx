import s from './Header.module.css'
import Navigation from '../Navigation/Navigation.jsx'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'

export default function Header() {

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to='/'>
                 <div >
                <img src={logo} alt="Logo" />
                </div>
                </Link>
               <Navigation/>

            </div>
        </header>
    )
};