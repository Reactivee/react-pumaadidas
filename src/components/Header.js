import React from 'react'
import { BsFillBasket3Fill } from "react-icons/bs";
import { BiHeart, BiUserCircle } from "react-icons/bi";
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

export const Header = (props) => {

    const { total_price } = useCart()


    return (
        <header className="header">
            <nav className='d-flex align-items-center justify-content-between'>
                <div className="logo d-flex align-items-center">
                    <Link to='/'>
                        <div className="logo_img">
                            <img src="/img/llogo.png" className='' />
                        </div>
                    </Link>
                    <div className="logo_text">
                        <h4>REACT SNEAKERS</h4>
                        <span>Магазин лучших кроссовок</span>
                    </div>
                </div>
                <div className="nav_group d-flex align-items-center">
                    <div className="basket_icon" onClick={props.onclickCard}>
                        <BsFillBasket3Fill />
                    </div>
                    <div className="basket_price mx-3 cursor-pointer" >
                        <span className='fon'>{total_price} $</span>
                    </div>
                    <Link to='/favorite'>
                    <div className="favo mx-3">
                        <BiHeart width={50} />
                    </div>
                    </Link>
                    <Link to='/orders'>
                        <div className="user_profile mx-3">
                            <BiUserCircle />
                        </div>
                    </Link>

                </div>
            </nav>
            <hr />
        </header>
    )
}
