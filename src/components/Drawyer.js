import React, { useContext, useEffect } from 'react'
import { iContext } from '../App'
import { useCart } from '../hooks/useCart'

export const Drawyer = ({ onClose, onDelete }) => {

  const { basket, total_price } = useCart()

  return (
    <div className="overlay">
      <div className="basket">

        <div className=" d-flex justify-content-between">
          <h3>Корзина</h3>
          <img onClick={onClose} src="./img/exit.svg" alt="love" />
        </div>

        <div className="basket_item mt-4 d-flex flex-column align-content-between">
          {basket.map(item => (
            <div className="p-3 card_item basket_card_item">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img className='w-100' src={item.image} alt="Title" />
                </div>
                <div className="col-md-6">
                  <div className="card-body p-0 d-flex flex-column">
                    <h6 className="card-title">{item.title}</h6>
                    <p className="card-price card-title mt-2">{item.price}</p>
                  </div>
                </div>
                <div className="col-md-2" >
                  <img onClick={() => onDelete(item.id)} src="./img/exit.svg" alt="love" className='w-100' />
                </div>
              </div>
            </div>
          ))}


          <div className="checkout_block">
            <div className="total_price d-flex justify-content-between">
              <span>Итого: </span>
              <span>{total_price} $ </span>
            </div>
            <div className="tax d-flex justify-content-between">
              <span>Налог 5%:</span>
              <span>{total_price * 0.15} $</span>
            </div>
            <button className='checkout_btn '>Оформить заказ <img className='arrow_checkout_btn' src="./img/arrow.svg" alt="" /></button>
          </div>

        </div>
      </div>
    </div>
  )
}

