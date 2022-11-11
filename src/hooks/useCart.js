import React from 'react'
import { useContext } from "react";
import { iContext } from "../App";

export const useCart = () => {

    const { basket } = useContext(iContext);
    
    const total_price = basket.reduce((sum, item) => parseInt(item.price) + sum, 0);

    return { basket, total_price }
}


