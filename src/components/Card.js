import React from 'react'

export const Card = (props) => {

    return (
        <div className="col-md-3  h-100">
            <div className="card p-3 card_item  h-100">
                <img src="./img/love.svg" alt="love" width={32} height={32} />
                <img className="w-100" src={props.item.image} alt="Title" />
                <h6 className="card-title ">{props.item.title}</h6>
                <div className="card-body p-0 d-flex align-items-center justify-content-between">
                    <div className="card_price">
                     
                        <span className="card-price_text">Цена:</span>
                        <p className="card-price card-title">{props.item.price} руб.</p>
                    </div>
                    <div className="card_like">
                        <button onClick={props.onclick} className='btn'><img src="./img/love.svg" alt="love" width={32} height={32} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
