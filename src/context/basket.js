import React, { useState } from 'react'

export const BasketContext = React.createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [error, setError] = useState('');

    const addProductToBasket = (data) => {
        try {
            setBasket([
                ...basket,
                data
            ])
        } catch (error) {
            setError("Something wrong!")
        }
    }

    const calculateBasketTotalPrice = () => {
        try {
            let sum = basket.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.price;
            }, 0);
            setTotalPrice(sum)
        } catch (error) {
            setError("Something wrong");
        }
    };

    return (
        <BasketContext.Provider
            value={{
                basket,
                totalPrice,
                error,
                addProductToBasket,
                calculateBasketTotalPrice
            }}
        >
            {children}
        </BasketContext.Provider>
    )
}
