import React, { useContext, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import { UserContext } from '../../Context/UserContext';
import { SignOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { CartContext } from '../../Context/CartContext';

import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navigation.styles.jsx'

function Navigation() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isOpen } = useContext(CartContext)
    const signOutHandler = async () => {
        await SignOutUser();

        setCurrentUser(null)
    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crown />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                    {currentUser
                        ? (<NavLink as='span' onClick={signOutHandler} >SIGN OUT</NavLink>)
                        : (<NavLink to='/auth'>SIGN IN</NavLink>)}


                    <CartIcon />
                </NavLinks>
                {isOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />

        </Fragment>
    )
}

export default Navigation