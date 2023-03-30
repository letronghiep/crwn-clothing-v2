import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navigation.styles.jsx'
import { selectUser } from '../../store/user/selectUser';
import { selectCartIsOpen } from '../../store/cart/selectCart';
import { signOutStart } from '../../store/user/userAction';

function Navigation() {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectUser)
    const isOpen = useSelector(selectCartIsOpen)
    const SignOutUser = () => dispatch(signOutStart())
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
                        ? (<NavLink as='span' onClick={SignOutUser} >SIGN OUT</NavLink>)
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