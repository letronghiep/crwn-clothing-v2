import React, { useContext } from 'react'
import './navigation.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { UserContext } from '../../Context/UserContext';
import { SignOutUser } from '../../utils/firebase/firebase';
function Navigation() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
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


                    <Link className='nav-link' to='/cart'>{<AddShoppingCartIcon />}</Link>

                </div>
            </div>
            <Outlet />

        </div>
    )
}

export default Navigation