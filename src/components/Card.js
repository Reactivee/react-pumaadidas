import React, { useContext, useState } from 'react'
import { iContext } from '../App'

export const Card = ({ item, onfavorite, price, image, id, onclick, favorited, added, title }) => {

    const [favorite, setFavorite] = useState(favorited)
    const cardObj = { id, parent_id: id, title, image, price }
    const { addedItemBasket } = useContext(iContext)
  
    const clickAdd = () => {
        onclick(cardObj)
    }

    const addFavorite = () => {
        onfavorite()
        setFavorite(!favorite)
    }

    return (
        <div className="col-md-3  h-100">
            <div className="card p-3 card_item  h-100">
                <div >
                    <img onClick={addFavorite} src={favorite ? "./img/loved.svg" : "./img/love.svg"} alt="love" width={32} height={32} />
                </div>
                <img className="w-100" src={item.image} alt="Title" />
                <h6 className="card-title ">{item.title}</h6>
                <div className="card-body p-0 d-flex align-items-center justify-content-between">
                    <div className="card_price">

                        <span className="card-price_text">Цена:</span>
                        <p className="card-price card-title">{item.price} руб.</p>
                        <p className="card-price card-title">{item.id}</p>

                    </div>
                    <div className="card_like">
                        <button onClick={clickAdd} className='btn'><img src={addedItemBasket(cardObj) ? "./img/checked.svg" : "./img/love.svg"} alt="love" width={32} height={32} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
