import React from 'react'
import { BsFillBasket3Fill, BsFillHeartFill } from "react-icons/bs";
import { BiHeart, BiUserCircle } from "react-icons/bi";
export const Header = () => {
    return (
        <header className="header">
            <nav className='d-flex align-items-center justify-content-between'>
                <div className="logo d-flex align-items-center">
                    <div className="logo_img">
                        <img src="/img/llogo.png" className='' />
                    </div>
                    <div className="logo_text">
                        <h4>REACT SNEAKERS</h4>
                        <span>Магазин лучших кроссовок</span>
                    </div>
                </div>
                <div className="nav_group d-flex align-items-center">
                    <div className="basket_icon">
                        <BsFillBasket3Fill />
                    </div>
                    <div className="basket_price mx-3">
                        <span className='fon'>12345 $</span>
                    </div>
                    <div className="favo mx-3">
                        <BiHeart width={50} />
                    </div>
                    <div className="user_profile mx-3">
                        <BiUserCircle />
                    </div>
                </div>
            </nav>
            <hr />
        </header>
    )
}
