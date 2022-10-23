import React from 'react'
import Basic from "@layout/basic";
import Basket from '@comps/basket'
import BasketPreview from "@comps/basket-preview";

const BasketPage = () => {
    return (
        <Basic>
            <BasketPreview label="MENU" redirectTo="" />
            <Basket />
        </Basic>
    )
}

export default BasketPage