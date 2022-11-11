import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { iContext } from '../App'
import { Card } from '../components/Card'

export const Favorites = ({ addFavorite, addToBasket }) => {


    const { favorite } = useContext(iContext)

    return (
        <div className='row mt-4 align-items-stretch h-100 gx-5'>
            {favorite

                .map((item) =>
                    <Card
                        key={item.id}
                        item={item}
                        favorited={true}
                        onfavorite={() => addFavorite(item)}
                        onclick={() => addToBasket(item)}
                    />)
            }
        </div>
    )
}
