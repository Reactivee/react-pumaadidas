import React from 'react'

export const Drawyer = () => {
  return (
    <div className="overlay">
      <div className="basket">
        <h3>Корзина</h3>
        <div className="basket_item mt-4 d-flex flex-column align-content-between">

          <div className="p-3 card_item basket_card_item">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img className='w-100' src="./img/item1.png" alt="Title" />
              </div>
              <div className="col-md-6">
                <div className="card-body p-0 d-flex flex-column">
                  <h6 className="card-title">Мужские Кроссовки Nike Air Max 270</h6>
                  <p className="card-price card-title mt-2">12 999 руб.</p>
                </div>
              </div>
              <div className="col-md-2">

                <img src="./img/exit.svg" alt="love" className='w-100' />
              </div>
            </div>
          </div>

          <div className="checkout_block">
            <div className="total_price d-flex justify-content-between">
              <span>Итого: </span>
              <span>21 498 руб </span>
            </div>
            <div className="tax d-flex justify-content-between">
              <span>Налог 5%:</span>
              <span>1074 руб</span>
            </div>
            <button className='checkout_btn '>Оформить заказ <img className='arrow_checkout_btn' src="./img/arrow.svg" alt="" /></button>
          </div>

        </div>
      </div>
    </div>
  )
}

