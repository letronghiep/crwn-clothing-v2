import React from 'react'
import './navigation.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Navigation() {
    return (
        <div>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Crown className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/contact'>CONTACT</Link>
                    <Link className='nav-link' to='/auth'>SIGN IN</Link>
                    <Link className='nav-link' to='/cart'>{<AddShoppingCartIcon />}</Link>

                </div>
            </div>
            <Outlet />

        </div>
    )
}

export default Navigation