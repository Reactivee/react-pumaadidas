import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card } from '../components/Card'

export const Orders = () => {
    const [orders, setOrders] = useState()

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://6332e4f6a54a0e83d25b2521.mockapi.io/card')
            setOrders(data)
        })
            ()
    }, [])
    console.log(orders)

    return (
        <div>
            <h2>My Orders</h2>
            <div className='row mt-4 align-items-stretch h-100 gx-5'>
                {orders && orders.map((item) =>
                    <Card
                        key={item.id}
                        item={item}
                         />)
                }
            </div>

        </div>
    )
}
