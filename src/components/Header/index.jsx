import './styles.css'
import NavBar from '../NavBar';
import logo from '../../assets/img/logo2.png'

export function Header(){
    return (
        <div>
        <header>
            <img id="logo" src={logo} alt="" />
            <h1>Padaria Sweet Dreams</h1>
        </header>
        <NavBar />
        </div>
    )
}

export default Header;