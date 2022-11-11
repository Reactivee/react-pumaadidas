import React from 'react'
import { Card } from '../components/Card';
import '../App.scss';
import { iContext } from '../App'
import { useContext } from 'react';

export const Home = ({ searchInputChange, search, addToBasket, addFavorite }) => {

    const { addedItemBasket, items } = useContext(iContext)
    return (
        <div className='content'>
            <div className='title_wrapper d-flex align-items-center justify-content-between'>
                <div className="title_block ">
                    <h2>{search ? search : 'Все кроссовки'}</h2>
                </div>
                <div className="search">
                    <input onChange={searchInputChange} className='form-control w-100' type="search" placeholder='Поиск...' />
                </div>
            </div>

            <div className="items_wrapper">
                <div className="row mt-4 align-items-stretch h-100 gx-5">

                    {items
                        .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                        .map((item) =>
                            <Card
                                key={item.id}
                                item={item}
                                added={addedItemBasket(item)}
                                onfavorite={() => addFavorite(item)}
                                onclick={(cardObj) => addToBasket(cardObj)}
                                price={item.price}
                                image={item.image}
                                id={item.id}
                                title={item.title}
                            />)}

                </div>
            </div>

        </div>
    )
}
