import './Header.css'
import reactLogo from './assets/react.svg'

const Header = () => {
    return (
        <>
        <div className="header-body">
            <img src={reactLogo} alt="react-logo" className='header-react-logo' />
            <nav className='header-nav'>
                <li>Home</li>
                <li>About</li>
            <   li>Contact</li>
            </nav>
        </div>
        </>
    )
}
export default Header