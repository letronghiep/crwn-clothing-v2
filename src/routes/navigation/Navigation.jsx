import React, { useContext } from 'react'
import './navigation.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import { UserContext } from '../../Context/UserContext';
import { SignOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { CartContext } from '../../Context/CartContext';
function Navigation() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isOpen } = useContext(CartContext)
    const signOutHandler = async () => {
        await SignOutUser();

        setCurrentUser(null)
    }
    return (
        <div>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Crown className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/contact'>CONTACT</Link>
                    {currentUser
                        ? (<span className='nav-link' onClick={signOutHandler} >SIGN OUT</span>)
                        : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)}


                    <CartIcon />
                </div>
                {isOpen && <CartDropdown />}
            </div>
            <Outlet />

        </div>
    )
}

export default Navigation